const ReviewModel = require("../models/reviewsModel");
const LawyerModel = require("../models/lawyerModel");
const {sendEmail} = require("../validation/emailValidation")
const mongoose=require("mongoose");

const getReview = async (req, res) => {
  const review = await ReviewModel.find();

  if (!review) {
    return res.status(400).json({ message: "review not found" });
  }

  if (review.length == 0) {
    return res.status(400).json({ message: "review empty" });
  }

  return res.status(200).json(review);
};

const createReview = async (req, res) => {
let email=req.params.email
let {rate,name,image,userEmail,comments}=req.body
let lawyerExist;

  try {
   lawyerExist = await LawyerModel.findOne({ email })
  } catch (err) {
    return console.log(err);
  }
  if (!lawyerExist) {
    return res.status(404).json({ massage: "lawyer not found" });
  }
  let review;
  try {
    review = new ReviewModel({
        userEmail,
        comments,
        image,
        name,
        rate,
        lawyerEmail:req.params.email
    });
    
    sendEmail(review.rate,email,review.comments,review.userEmail).then(res=>res).catch(error=>console.log(error))

    const session = await mongoose.startSession();
    session.startTransaction();
    lawyerExist.reviews.push(review);
    await lawyerExist.save({ session });
    review = await review.save({ session });
    session.commitTransaction();
  } catch (error) {
    console.log(error);
  }

  if (!review) {
    return res.status(400).json({ message: "error in creating review" });
  }

  return res.status(200).json(review);
};
const deleteReview = async (req, res) => {
  const id = req.params.id;

  let existUser;

  let review;
  try {
    const session = await mongoose.startSession();
    session.startTransaction();
    review = await ReviewModel.findById(id)
    existUser = await LawyerModel.findOne({email:review.lawyerEmail})
    existUser.reviews.pull(review);
    await existUser.save({ session });
    review = await ReviewModel.findByIdAndRemove(id);
    session.commitTransaction();
  } catch (err) {
    return console.log(err);
  }
  if (!review) {
    return res.status(500).json({ message: "Unable to delete" });
  }

  return res.status(200).json({ message: "Deleted Successfully" });
};

module.exports = {
    getReview,
    createReview,
    deleteReview
};
