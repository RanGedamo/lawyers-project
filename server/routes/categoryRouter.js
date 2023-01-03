const router=require("express").Router();
const {getCategory,createCategory,getCategoryById}=require("../controller/categoryCtrl")

router.get("/",getCategory)
router.get("/:id",getCategoryById)

router.post("/",createCategory)

module.exports=router