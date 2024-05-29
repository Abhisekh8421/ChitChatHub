import mongoose from "mongoose";

export const connectDb = async () => {
  await mongoose
    .connect(process.env.MONGODB_URL, {
      dbName: process.env.MONGODB_NAME,
    })
    .then(() => console.log("DATABASE CONNECTED"))
    .catch((e) => console.log("database connection failed", e.message));
};
