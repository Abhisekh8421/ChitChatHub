import { ApiError, asyncHandler, emitEvent } from "../utils/features.js";
import { ALERT, REFETCH_CHATS } from "../constants/events.js";
import Chat from "../models/chat.js";
import { getOtherMember } from "../lib/helper.js";
import User from "../models/user.js";

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
    avatar: members.slice(0, 3).map(({ avatar }) => avatar.url),
  }));
  return res.json({
    success: true,
    groups,
  });
});

export const addMembers = asyncHandler(async (req, res) => {
  const { chatId, members } = req.body;
  const chat = await Chat.findById(chatId);
  if (!chat) {
    throw new ApiError(404, "Chat Not Found");
  }
  if (!chat.groupChat) {
    throw new ApiError(400, "This is Not a Group Chat");
  }
  if (chat.creator.toString() !== req.user.toString()) {
    throw new ApiError(403, "You are not allowed to add a members");
  }

  const AllNewmembersPromise = members.map((member) =>
    User.findById(member, "name")
  );

  const Allmembers = Promise.all(AllNewmembersPromise);

  chat.members.push(...(await Allmembers).map((member) => member._id));
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
