import { ApiError, asyncHandler, emitEvent } from "../utils/features.js";
import { ALERT, REFETCH_CHATS } from "../constants/events.js";
import Chat from "../models/chat.js";
import { getOtherMember } from "../lib/helper.js";

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

export const getMychats = asyncHandler(async (req, res) => {
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
