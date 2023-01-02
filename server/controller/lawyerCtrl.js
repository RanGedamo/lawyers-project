const LawyerModel = require("../models/lawyerModel");

const getLawyers = async (req, res) => {
  const lawyer = await LawyerModel.find().populate("category").populate("reviews");
  if (!lawyer) {
    return res.status(400).json({ message: "layers not found" });
  }

  if (lawyer.length == 0) {
    return res.status(400).json({ message: "layers empty" });
  }

  return res.status(200).json(lawyer);
};

const createLayer = async (req, res) => {
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

  let lawyer;
try {
    lawyer = new LawyerModel({
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
      });
    
      lawyer=await lawyer.save()  
} catch (error) {
    console.log(error)
}

if(!lawyer){
    return res.status(400).json({message:"error in creating lawyers"});

}

return res.status(200).json(lawyer);

};

module.exports = {
  getLawyers,
  createLayer
};
