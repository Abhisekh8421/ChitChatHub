import express from "express";
import userRouter from "./routes/user.js";
import chatRouter from "./routes/chat.js";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import cors from "cors";
import { connectDb } from "./database/db.js";
import createUser from "./seeders/user.js";
import {
  createGroupChats,
  createMessagesInAChat,
  createSingleChats,
} from "./seeders/chat.js";
dotenv.config({
  path: "./.env",
});

const app = express();

//Database connection

connectDb();
// createUser(15); for example purpose fake data
// createSingleChats(10);
// createGroupChats(10); for sample purpose

// createMessagesInAChat("665f3fb69170eaeb93d2999e",50);

//must be included before routes
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

//routes
app.use("/user", userRouter);
app.use("/chat", chatRouter);

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(300, () => {
  console.log("server is started at port : 3000");
});
