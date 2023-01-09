const router = require('express').Router()
const {postContactUs,postContactUsPayment} = require('../controller/emailHandler');


router.post('/contactUs',postContactUs);
router.post('/contactUs/payment',postContactUsPayment);




module.exports=router;
