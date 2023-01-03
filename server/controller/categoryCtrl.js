const CategoryModel = require("../models/categoryModel");

const getCategory = async (req, res) => {
  const category = await CategoryModel.find();

  if (!category) {
    return res.status(400).json({ message: "category not found" });
  }

  if (category.length == 0) {
    return res.status(400).json({ message: "category empty" });
  }

  return res.status(200).json(category);
};

const createCategory = async (req, res) => {
  const { subCategory, name } = req.body; //13

  let category;
  try {
    category = new CategoryModel({
      subCategory,
      name,
    });

    category = await category.save();
  } catch (error) {
    console.log(error);
  }

  if (!category) {
    return res.status(400).json({ message: "error in creating lawyers" });
  }

  return res.status(200).json(category);
};


const getCategoryById = async (req, res) => {

  let category;

  try {
    category = await CategoryModel.findById(req.params.id);
  } catch (err) {
     console.log(err);
  }
  if (!category) {
    return res.status(404).json( "No category found");
  }
  return res.status(200).json(category);
};

module.exports = {
    getCategory,
    createCategory,
    getCategoryById
};
