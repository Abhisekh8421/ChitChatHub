import express from "express";
import { multerUpload } from "../middlewares/multer.js";
import { newGroupChat } from "../controllers/chat.js";

const router = express.Router();
router.post("/newgroup", newGroupChat);

export default router;
