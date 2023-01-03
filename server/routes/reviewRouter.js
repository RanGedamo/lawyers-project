const router=require("express").Router();
const {getReview,createReview,deleteReview}=require("../controller/reviewCtrl")

router.get("/",getReview)
router.post("/:email",createReview)
router.delete("/:id",deleteReview)


module.exports=router