const router=require("express").Router();
const {getUsers,registerUser}=require("../controller/userCtrl")

router.get("/",getUsers)
// router.get("/:email",getLawyerByEmail)

router.post("/register",registerUser)
// router.post("/login",loginLawyer)
// router.put("/:email",updateLawyer)



module.exports=router