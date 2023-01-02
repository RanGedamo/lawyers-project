const router=require("express").Router();
const {getCategory,createCategory}=require("../controller/categoryCtrl")

router.get("/",getCategory)
router.post("/",createCategory)

module.exports=router