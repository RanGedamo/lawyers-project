const router = require('express').Router()
const {postContactUs,postDomain} = require('../controller/emailHandler');


router.post('/contactUs',postContactUs);
router.post('/domain',postDomain);



module.exports=router;
