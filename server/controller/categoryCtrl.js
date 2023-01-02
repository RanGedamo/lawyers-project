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

module.exports = {
    getCategory,
    createCategory,
};
