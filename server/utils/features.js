import jwt from "jsonwebtoken";

const cookieoptions = {
  maxAge: 15 * 24 * 60 * 60 * 1000,
  sameSite: "none",
  httpOnly: true,
  secure: true,
};
export const sendToken = (res, user, statuscode, message) => {
  const accessToken = jwt.sign(
    { _id: user._id },
    process.env.ACCESSTOKENSECRET
  );
  return res
    .status(statuscode)
    .cookie("accessToken", accessToken, cookieoptions)
    .json({
      success: true,
      message,
    });
};
