import jwt from "jsonwebtoken";
import { getBase64 } from "../lib/helper";
import { v4 as uuid } from "uuid";
import { v2 as cloudinary } from "cloudinary";

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

const asyncHandler = (requestHandler) => {
  return async (req, res, next) => {
    //like a higher order function
    try {
      await requestHandler(req, res, next); // waits for completion of the code if it produces any error then it goes to catch block then it pass to next middleware
    } catch (error) {
      next(error); //pass  the error to next middleware
    }
  };
};

class ApiError extends Error {
  constructor(
    statusCode,
    message = "some related error",
    errors = [],
    stack = ""
  ) {
    super(message);
    this.errors = errors;
    this.data = null;
    this.message = message;
    this.success = false;
    this.statusCode = statusCode;
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

class ApiResponse {
  constructor(statusCode, data, message = "Success") {
    this.data = data;
    this.statusCode = statusCode;
    this.message = message;
    this.success = statusCode < 400;
  }
}

const emitEvent = (req, event, users, data) => {};

export const uploadFilesToCloudinary = async (files = []) => {
  const uploadPromises = files.map((file) => {
    return new Promise((resolve, reject) => {
      cloudinary.uploader.upload(
        getBase64(file),
        {
          resource_type: "auto",
          public_id: uuid(),
        },
        (error, result) => {
          if (error) return reject(error);
          resolve(result);
        }
      );
    });
  });

  try {
    const results = await Promise.all(uploadPromises);

    const formattedResults = results.map((result) => ({
      public_id: result.public_id,
      url: result.secure_url,
    }));
    return formattedResults;
  } catch (err) {
    throw new Error("Error uploading files to cloudinary", err);
  }
};

const deletFilesFromCloudinary = async (public_ids) => {
  // Delete files from cloudinary
};

export { ApiError, asyncHandler, ApiResponse, emitEvent };
