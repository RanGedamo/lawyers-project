const UsersModel = require("../models/usersModel");
const LawyerModel = require("../models/lawyerModel");
const {userRegisterValidate} = require('../validation/userRegisterValidation');
const {userLoginValidate} = require('../validation/userLogin');

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const getUsers = async (req, res) => {
  const users = await UsersModel.find().select("-_id -password");
  if (!users) {
    return res.status(400).json({ message: "users not found" });
  }

  if (users.length == 0) {
    return res.status(400).json({ message: "users empty" });
  }

  return res.status(200).json(users);
};

const registerUser = async (req, res) => {
  const { token, firstName, lastName, image, email, password } = req.body; //13
  const emailExistInLayerModel = await LawyerModel.findOne({ email });
  const emailExistInUserModel = await UsersModel.findOne({ email });
  const {error} = userRegisterValidate(req.body);

  if(error){
    return res.status(400).send({message: error.details[0].message})
  }
  if (emailExistInLayerModel || emailExistInUserModel) {
    return res.status(400).json({ message: "email already exist" });
  }
  const salt = await bcrypt.genSalt(8);
  const hashedPassword = await bcrypt.hash(password, salt);

  let user = new UsersModel({
    firstName,
    lastName,
    image: "",
    email,
    password: hashedPassword,
    token: "",
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

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  
  const {error} = userLoginValidate(req.body);
  if(error){
    return res.status(400).send({message:error.details[0].message})
  }
  const existUser = await UsersModel.findOne({ email }).select("-_id ");
  if (!existUser) {
    return res.status(404).json({ message: "user not found" });
  }
 
  const comperedPassword = bcrypt.compareSync(password, existUser.password);

  if (!comperedPassword) {
    return res.status(400).json({ message: "password invalid" });
  }

  const token = jwt.sign({ email: existUser.email }, process.env.SECRET_TOKEN);
  existUser.token = token;

  return res
    .status(200)
    .header("auth-token", token)
    .json({ user: existUser, message: "login successfully" });
};

const getUserByEmail = async (req, res) => {
  let user;
  let email = req.params.email;
  try {
    user = await UsersModel.findOne({ email }).select("-_id -password");
  } catch (error) {
    console.log(error);
  }

  if (!user) {
    return res.status(400).json({ message: "user not found" });
  }

  return res.status(200).json(user);
};
const updateUser = async (req, res) => {
  const {firstName, lastName, image, password } = req.body;
  let user;

  const userExist =await UsersModel.findOne({ email:req.params.email })
  if (!userExist) {
    return res.status(201).json({ message: "user not exist" });
  }
  const salt = await bcrypt.genSalt(8);
  const hashedPassword = await bcrypt.hash(password, salt);
  try {
    user = await UsersModel.findOneAndUpdate(
      { email: req.params.email },
      {
        firstName,
        lastName,
        image,
        password:hashedPassword,
      }
    );
  } catch (error) {
    console.log(error);
  }
  if (!user) {
    return res.status(400).json({ message: "error in updating user" });
  }

  return res.status(200).json(user);
};

module.exports = {
  getUsers,
  registerUser,
  loginUser,
  getUserByEmail,
  updateUser
};
