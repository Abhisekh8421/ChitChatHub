import express from "express";
import userRouter from "./routes/user.js";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import cors from "cors";

const app = express();

//must be included before routes
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(300, () => {
  console.log("server is started at port : 3000");
});
