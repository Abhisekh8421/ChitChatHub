import User from "../models/user.js";
const newUser = async (req, res) => {
  const { name, password, bio, username } = req.body;
};

const login = (req, res) => {};

export { login, newUser };
