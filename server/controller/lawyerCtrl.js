const LawyerModel = require("../models/lawyerModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


const getLawyers = async (req, res) => {
  const lawyer = await LawyerModel.find()
    .populate("category")
    .populate("reviews");
  if (!lawyer) {
    return res.status(400).json({ message: "layers not found" });
  }

  if (lawyer.length == 0) {
    return res.status(400).json({ message: "layers empty" });
  }

  return res.status(200).json(lawyer);
};

const registerLawyer = async (req, res) => {
  const {
    firstName,
    lastName,
    location,
    description,
    image,
    title,
    reviews,
    category,
    email,
    password,
    phone,
    token,
    price,
  } = req.body; //13
  const emailExist = await LawyerModel.findOne({ email });
  if (emailExist) {
    return res.status(201).json({ massage: "email already exist" });
  }
  const salt = await bcrypt.genSalt(8);
  const hashedPassword = await bcrypt.hash(password, salt);

  let lawyer = new LawyerModel({
    firstName,
    lastName,
    location,
    description,
    image,
    title,
    reviews,
    category,
    email,
    password: hashedPassword,
    phone,
    token,
    price,
  });
  try {
    lawyer = await lawyer.save();
  } catch (error) {
    console.log(error);
  }

  if (!lawyer) {
    return res.status(400).json({ message: "error in creating lawyers" });
  }

  return res.status(200).json(lawyer);
};
const loginLawyer = async (req, res) => {
  const { email, password } = req.body;

  const existUser = await LawyerModel.findOne({ email }).populate("category").populate("reviews").select("-_id -password")
  if (!existUser) {
    return res.status(404).json({ massage: "user not found" });
  }

  const comperedPassword = bcrypt.compare(password, existUser.password);

  if (!comperedPassword) {
    return res.status(400).json({ massage: "password invalid" });
  }

  const token = jwt.sign({ email: existUser.email }, process.env.SECRET_TOKEN);
  existUser.token=token


  return res.status(200).header("auth-token",token).json({user:existUser, massage: "login successfully",});
};

const getLawyerByEmail= async (req, res) => {
  let lawyer;
  let email=req.params.email
  try {
    lawyer = await LawyerModel.findOne({email}).populate("category").populate("reviews").select("-_id -password");
  } catch (error) {
    console.log(error);
  }

  if (!lawyer) {
    return res.status(400).json("lawyer not found");
  }

  return res.status(200).json(lawyer);
};
module.exports = {
  getLawyers,
  registerLawyer,
  loginLawyer,
  getLawyerByEmail,
};
