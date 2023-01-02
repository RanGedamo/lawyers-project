const router=require("express").Router();
const {getLawyers,createLayer}=require("../controller/lawyerCtrl")

router.get("/",getLawyers)
router.post("/",createLayer)

module.exports=router