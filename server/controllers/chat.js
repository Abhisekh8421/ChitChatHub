import { ApiError, asyncHandler, emitEvent } from "../utils/features";
import { ALERT, REFETCH_CHATS } from "../constants/events.js";
import Chat from "../models/chat.js";

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
