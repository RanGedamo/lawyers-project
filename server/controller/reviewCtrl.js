const ReviewModel = require("../models/reviewsModel");

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
  const {} = req.body; //13

  let lawyer;
  try {
    lawyer = new LawyerModel({});

    lawyer = await lawyer.save();
  } catch (error) {
    console.log(error);
  }

  if (!lawyer) {
    return res.status(400).json({ message: "error in creating lawyers" });
  }

  return res.status(200).json(lawyer);
};

module.exports = {
  getLawyers,
  createLayer,
};
