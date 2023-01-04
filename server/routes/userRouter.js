const router=require("express").Router();
const {getUsers,registerUser,loginUser,getUserByEmail,updateUser}=require("../controller/userCtrl")

router.get("/",getUsers)
router.get("/:email",getUserByEmail)
router.post("/register",registerUser)
router.post("/login",loginUser)
router.put("/:email",updateUser)



module.exports=router