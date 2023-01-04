const UsersModel = require("../models/usersModel");
const LawyerModel = require("../models/lawyerModel");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const getUsers = async (req, res) => {
  const users = await UsersModel.find();
  if (!users) {
    return res.status(400).json({ message: "users not found" });
  }

  if (users.length == 0) {
    return res.status(400).json({ message: "users empty" });
  }

  return res.status(200).json(users);
};

const registerUser = async (req, res) => {
  const { token,firstName, lastName, image, email, password } = req.body; //13
  const emailExistInLayerModel = await LawyerModel.findOne({ email });
  const emailExistInUserModel = await UsersModel.findOne({ email });
  if (emailExistInLayerModel || emailExistInUserModel) {
    return res.status(400).json({ message: "email already exist" });
  }
  const salt = await bcrypt.genSalt(8);
  const hashedPassword = await bcrypt.hash(password, salt);

  let user = new UsersModel({
    firstName,
    lastName,
    image,
    email,
    password: hashedPassword,
    token
  });
  try {
    user = await user.save();
  } catch (error) {
    console.log(error);
  }

  if (!user) {
    return res.status(400).json({ message: "error in creating user" });
  }

  return res.status(200).json(user);
};

module.exports = {
  getUsers,
  registerUser
};
