import {
  ApiError,
  asyncHandler,
  emitEvent,
  uploadFilesToCloudinary,
} from "../utils/features.js";
import {
  ALERT,
  NEW_MESSAGE,
  NEW_MESSAGE_ALERT,
  REFETCH_CHATS,
} from "../constants/events.js";
import Chat from "../models/chat.js";
import { getOtherMember } from "../lib/helper.js";
import User from "../models/user.js";
import Message from "../models/message.js";

export const newGroupChat = asyncHandler(async (req, res) => {
  const { name, members } = req.body;

  if (members.length < 2)
    throw new ApiError(400, "group having atleast 2 members");

  const allmembers = [...members, req.user];

  await Chat.create({
    name,
    groupChat: true,
    creator: req.user,
    members: allmembers,
  });

  emitEvent(req, ALERT, allmembers, `Welecome to new ${name} Group chat`);
  emitEvent(req, REFETCH_CHATS, members);
  return res.status(201).json({
    success: true,
    message: "Group Created",
  });
});

export const getMychats = asyncHandler(async (req, res, next) => {
  const chats = await Chat.find({ members: req.user }).populate(
    "members",
    "name avatar"
  );
  const transformedChats = chats.map((_id, name, members, groupChat) => {
    const otherMember = getOtherMember(members, req.user);
    return {
      _id,
      groupChat,
      avatar: groupChat
        ? members.slice(0, 3).map(({ avatar }) => avatar.url)
        : [otherMember.avatar.url],
      name: groupChat ? name : otherMember.name,
      members: members.reduce((prev, curr) => {
        if (curr._id.toString() !== req.user.toString()) {
          prev.push(curr._id);
        }
        return prev;
      }, []),
      // members
      // .filter(curr => curr._id.toString() !== req.user.toString())   {similar function}
      // .map(curr => curr._id);
    };
  });

  return res.status(200).json({
    success: true,
    chats: transformedChats,
  });
});

export const getMygroups = asyncHandler(async (req, res) => {
  const chats = await Chat.find({
    members: req.user,
    groupChat: true,
    creator: req.user,
  }).populate("members", "name avatar");
  const groups = chats.map(({ members, groupChat, name, _id }) => ({
    _id,
    members,
    name,
    groupChat,
    avatar: members.slice(0, 3).map(({ avatar }) => avatar.url),
  }));
  return res.json({
    success: true,
    groups,
  });
});

export const addMembers = asyncHandler(async (req, res) => {
  const { chatId, members } = req.body;
  if (!members || members.length < 1) {
    throw new ApiError(400, "Please Provide Members ");
  }
  const chat = await Chat.findById(chatId);
  if (!chat) {
    throw new ApiError(404, "Chat Not Found");
  }
  if (!chat.groupChat) {
    throw new ApiError(400, "This is Not a Group Chat");
  }
  if (chat.creator.toString() !== req.user.toString()) {
    throw new ApiError(403, "You are not allowed to add a members"); //It verifies if the user making the request is the creator of the chat group
  }

  const AllNewmembersPromise = members.map((member) =>
    User.findById(member, "name")
  );

  const Allmembers = Promise.all(AllNewmembersPromise);

  const uniqueMembers = Allmembers.filter(
    (i) => !chat.members.includes(i._id.toString())
  ).map((i) => i._id); //this filter step creates a new array containing only those members from allmembers whose _id is not already present in chat.members

  chat.members.push(...uniqueMembers);
  if (chat.members.length > 50) {
    throw new ApiError(400, "Groups Limit Reached");
  }
  await chat.save();
  const AllUsersNames = (await Allmembers)
    .map((member) => member.name)
    .join(",");

  emitEvent(
    req,
    ALERT,
    chat.members,
    `${AllUsersNames} is Added to the ${chat.name} group `
  );

  return res.json({
    success: true,
    AllUsersNames,
  });
});

export const removeMembers = asyncHandler(async (req, res) => {
  const { chatId, userId } = req.body;
  const [chat, userThatwillBeRemoved] = await Promise.all([
    Chat.findById(chatId),
    User.findById(userId, "name"),
  ]);

  if (!chat) {
    throw new ApiError(404, "Chat Not Found");
  }
  if (!chat.groupChat) {
    throw new ApiError(400, "This is Not a Group Chat");
  }
  if (chat.creator.toString() !== req.user.toString()) {
    throw new ApiError(403, "You are not allowed to add a members"); //It verifies if the user making the request is the creator of the chat group
  }

  if (chat.members.lenght <= 3) {
    throw new ApiError(400, "Group Must have Atleast 3 members");
  }

  chat.members = chat.members.filter(
    (member) => member.toString() !== userId.toString()
  );
  await chat.save();

  emitEvent(
    req,
    ALERT,
    chat.members,
    `${userThatwillBeRemoved} has been removed from the group`
  );

  emitEvent(req, REFETCH_CHATS, chat.members);
  return res.status(200).json({
    success: true,
    message: "member removed successfully",
  });
});

export const leaveGroup = asyncHandler(async (req, res) => {
  const chatId = req.params.id;
  const chat = await Chat.findById(chatId);
  if (!chat) throw new ApiError(400, "User is Not found");
  if (!chat.groupChat) {
    throw new ApiError(400, "This is Not a Group Chat");
  }

  const remainingMembers = chat.members.filter(
    (member) => member.toString() !== req.user.toString()
  );

  if (remainingMembers.length < 3)
    throw new ApiError(400, "Group Must have  at least 3 members");

  if (chat.creator.toString() === req.user.toString()) {
    const randomElement = Math.floor(Math.random() * remainingMembers.length);
    const newCreator = remainingMembers[randomElement];
    chat.creator = newCreator;
  }
  chat.members = remainingMembers;
  const [user] = await Promise.all([
    User.findById(req.user, "name"),
    await chat.save(),
  ]);

  emitEvent(req, ALERT, chat.members, {
    chatId,
    message: `User ${user.name} has left the group`,
  });

  return res.status(200).json({
    success: true,
    message: "Leave Group Successfully",
  });
});

export const sendAttachments = asyncHandler(async (req, res) => {
  const { chatId } = req.body;
  const [chat, user] = await Promise.all([
    Chat.findById(chatId),
    User.findById(req.user, "name"),
  ]);
  if (!chat) {
    throw new ApiError(404, "Chat Not Found");
  }
  const files = req.files || [];
  if (files.length < 1)
    throw new ApiError(400, "please provide atleast one Attachment");

  const attachments = await uploadFilesToCloudinary(files);

  const messageForDB = {
    content: "",
    attachments,
    sender: user._id,
    chat: chatId,
  };

  const messageForRealTime = {
    ...messageForDB,
    sender: {
      _id: user._id,
      name: user.name,
    },
  };

  const message = await Message.create(messageForDB);
  emitEvent(req, NEW_MESSAGE, chat.members, {
    message: messageForRealTime,
    chatId,
  });

  emitEvent(req, NEW_MESSAGE_ALERT, chat.members, { chatId });

  return res.status(200).json({
    success: true,
    message,
  });
});

export const getChatDetails = asyncHandler(async (req, res) => {
  if (req.query.populate === "true") {
    const chat = await Chat.findById(req.params.id)
      .populate("members", "name avatar")
      .lean(); // making the operation faster and more efficient
    if (!chat) throw new ApiError(404, "Chat Not found");
    chat.members = chat.members.map(({ _id, name, avatar }) => ({
      _id,
      name,
      avatar: avatar.url,
    })); // it modifies the members field of the chat by mapping over each member and extracting their _id, name, and the url of their avatar.
    await chat.save();

    return res.status(200).json({
      success: true,
      chat,
    });
  } else {
    const chat = await Chat.findById(req.params.id).populate(
      "members",
      "name avatar"
    );
    if (!chat) throw new ApiError(404, "Chat Not Found");
    return res.status(200).json({
      success: true,
      chat,
    });
  }
});

export const renameGroup = asyncHandler(async (req, res) => {
  const chatId = req.params.id;
  const { name } = req.body;
  const chat = await Chat.findById(chatId);
  if (!chat) throw new ApiError(404, "Chat is Not Found");
  if (!chat.groupChat) throw new ApiError(400, "This is Not my Group Chat");
  if (chat.creator.toString() != req.user.toString()) {
    throw new ApiError(403, "You are Not allowed to Rename the Group");
  }
  chat.name = name;
  await chat.save();
  emitEvent(req, REFETCH_CHATS, chat.members);
  return res.status(200).json({
    success: true,
    chat,
  });
});

export const deleteChat = asyncHandler(async (req, res) => {
  const chatId = req.params.id;
  const chat = await Chat.findById(chatId);
  if (!chat) throw new ApiError(404, "Chat Not found");
  if (chat.groupChat && chat.creator.toString() !== req.user.toString()) {
    throw new ApiError(400, "You are Not allowed to Delete This Chat");
  }
  if (!chat.groupChat && !chat.members.includes(req.user.toString())) {
    throw new ApiError(400, "You are Not allowed to delete the chat");
  }
});
