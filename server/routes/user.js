import express from "express";
import { login, newUser } from "../controllers/user.js";
import { multerUpload } from "../middlewares/multer.js";
import {
  loginValidator,
  registerValidator,
  validateHandler,
} from "../lib/validators.js";
import isAuthenticated from "../middlewares/auth.js";

const router = express.Router();

router.post(
  "/new",
  multerUpload.single("avatar"),
  registerValidator(),
  validateHandler,
  newUser
);


router.post("/login", loginValidator(), validateHandler, login);
router.use(isAuthenticated);

export default router;
