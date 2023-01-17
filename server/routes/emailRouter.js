const router = require('express').Router()
const {postContactUs,postContactUsPayment,postDomain} = require('../controller/emailHandler');

router.post('/domain',postDomain);
router.post('/contactUs',postContactUs);
router.post('/contactUs/payment',postContactUsPayment);




module.exports=router;
