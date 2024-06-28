import User from "../models/user.js";
import {
  ApiError,
  ApiResponse,
  asyncHandler,
  sendToken,
} from "../utils/features.js";
const newUser = async (req, res) => {
  const { name, password, bio, username } = req.body;
};

const login = asyncHandler(async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username }).select("+password");
  if (!user) throw new ApiError(404, "User is Not found");
  const ispasswordvalid = user.isPasswordCorrect(password);
  if (!ispasswordvalid) {
    throw new ApiError(401, "Password is Invalid");
  }
  sendToken(res, user, 200, `${user.name} Welcome Back`);
});

const getMyProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user);
  return res.status(200).json(
    new ApiResponse(
      200,
      {
        message: `your profile is found: ${user.username}`,
        user,
      },
      "successfully fetched your profile"
    )
  );
});

const LogoutUser = asyncHandler(async (req, res) => {
  const cookieoptions = {
    maxAge: 15 * 24 * 60 * 60 * 1000,
    sameSite: "none",
    httpOnly: true,
    secure: true,
  };
  return res
    .status(200)
    .cookie("chattu-token", "", { ...cookieoptions, maxAge: 0 })
    .json({
      success: true,
      message: "Logged out successfully",
    });
});

const SearchUser = asyncHandler(async (req, res) => {
  const { name } = req.query;

  return res.status(200).json({
    success: true,
    message: `hello ${name}`,
  });
});

export { login, newUser, getMyProfile, LogoutUser, SearchUser };
