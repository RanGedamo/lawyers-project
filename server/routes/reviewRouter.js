const router=require("express").Router();
const {getReview,createReview}=require("../controller/reviewCtrl")

router.get("/",getReview)
router.post("/",createReview)

module.exports=router