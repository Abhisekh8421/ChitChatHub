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

export { ApiError, asyncHandler, ApiResponse, emitEvent };
