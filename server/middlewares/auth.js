import jwt from "jsonwebtoken";

import { ApiError } from "../utils/ApiError.js";

import { asyncHandler } from "../utils/asyncHandler.js";

const isAuthenticated = asyncHandler(async (req, res, next) => {
  try {
    const token = req.cookies?.accessToken;
    if (!token) {
      throw new ApiError(401, "UnAuthorized Request");
      
    }
    const decodedToken = jwt.verify(token, process.env.ACCESSTOKENSECRET); //it will give you the basic user credientials

    req.user = decodedToken._id;
    next(); // sent the req.user data to next controller
  } catch (error) {
    throw new ApiError(401, error?.message || "Invalid User Token");
  }
});

export default isAuthenticated;
