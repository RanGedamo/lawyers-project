const router = require('express').Router()
const {postContactUs} = require('../controller/emailHandler');


router.post('/contactUs',postContactUs);



module.exports=router;
