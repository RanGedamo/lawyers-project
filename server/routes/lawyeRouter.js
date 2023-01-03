const router=require("express").Router();
const {getLawyers,registerLawyer,loginLawyer,getLawyerByEmail,updateLawyer}=require("../controller/lawyerCtrl")

router.get("/",getLawyers)
router.get("/:email",getLawyerByEmail)

router.post("/register",registerLawyer)
router.post("/login",loginLawyer)
router.put("/:email",updateLawyer)



module.exports=router