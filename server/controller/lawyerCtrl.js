const LawyerModel = require("../models/lawyerModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { validate } = require("../validation/lawyerRegisterValidation");
const {validationLogin} = require('../validation/lawyerLoginValidation');

const getLawyers = async (req, res) => {
  const lawyer = await LawyerModel.find()
    .populate("category")
    .populate("reviews").select("-_id -password");
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
    price,
    selectedCover,
    rate,
    experience,
    avgReplayTime,
    workDueTime,
    available
  } = req.body; //19

  const {error} = validate(req.body);

  if(error){
    return res.status(400).send({message:error.details[0].message})
  };
  const emailExist = await LawyerModel.findOne({ email });
  if (emailExist) {
    return res.status(400).json({ message: "email already exist" });
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
    price,
    selectedCover,
    rate,
    experience,
    avgReplayTime,
    workDueTime,
    available
  });
  try {
    const { error } = validate(req.body);

    if (error) {
      return res.status(400).send({ message: error.details[0].message });
    }
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
  const {error} = validationLogin(req.body);
   
  if(error){
    return res.status(400).send({message:error.details[0].message})
  }
  const { email, password } = req.body;

  const existUser = await LawyerModel.findOne({ email })
    .populate("category")
    .populate("reviews")
    .select("-_id ");
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

const getLawyerByEmail = async (req, res) => {
  let lawyer;
  let email = req.params.email;
  try {
    lawyer = await LawyerModel.findOne({ email })
      .populate("category")
      .populate("reviews")
      .select("-_id -password");
  } catch (error) {
    console.log(error);
  }

  if (!lawyer) {
    return res.status(400).json({ message: "lawyer not found" });
  }

  return res.status(200).json(lawyer);
};

const updateLawyer = async (req, res) => {
  const {
    firstName,
    lastName,
    location,
    description,
    image,
    title,
    reviews,
    category,
    password,
    phone,
    price,
    selectedCover,
    rate,
    experience,
    avgReplayTime,
    workDueTime,
    available
  } = req.body;
  let lawyer;

  const emailExist = await LawyerModel.findOne({ email });
  
  if (emailExist) {
    return res.status(201).json({ message: "email already exist" });
  };
  const {error} = validate(req.body);

  if(error){
    return res.status(400).send({message:error.details[0].message})
  };

  const salt = await bcrypt.genSalt(8);
  const hashedPassword = await bcrypt.hash(password, salt);
  try {
    lawyer = await LawyerModel.findOneAndUpdate(
      { email: req.params.email },
      {
        firstName,
        lastName,
        location,
        description,
        image,
        title,
        reviews,
        category,
        password: hashedPassword,
        phone,
        price,
        selectedCover,
        rate,
        experience,
        avgReplayTime,
        workDueTime,
        available
      }
    );
  } catch (error) {
    console.log(error);
  }
  if (!lawyer) {
    return res.status(400).json({ message: "error in updating lawyers" });
  }

  return res.status(200).json(lawyer);
};

module.exports = {
  getLawyers,
  registerLawyer,
  loginLawyer,
  getLawyerByEmail,
  updateLawyer,
};
