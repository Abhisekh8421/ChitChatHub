import express from "express";
import { multerUpload } from "../middlewares/multer.js";
import {
  addMembers,
  getMychats,
  getMygroups,
  leaveGroup,
  newGroupChat,
  removeMembers,
} from "../controllers/chat.js";
import {
  addMemberValidator,
  newGroupValidator,
  removeMemberValidator,
  validateHandler,
} from "../lib/validators.js";

const router = express.Router();

router.post("/newgroup", newGroupValidator(), validateHandler, newGroupChat);
router.get("/my", getMychats);
router.get("/my/groups", getMygroups);
router.put("/addmembers", addMemberValidator(), validateHandler, addMembers);
router.put(
  "/removemember",
  removeMemberValidator(),
  validateHandler,
  removeMembers
);
router.delete("/leave/:id", leaveGroup);

export default router;
