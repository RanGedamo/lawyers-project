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
  const {userEmail,comments} = req.body; //13

  let review;
  try {
    review = new ReviewModel({
        userEmail,comments
    });

    review = await review.save();
  } catch (error) {
    console.log(error);
  }

  if (!review) {
    return res.status(400).json({ message: "error in creating review" });
  }

  return res.status(200).json(review);
};

module.exports = {
    getReview,
    createReview,
};
