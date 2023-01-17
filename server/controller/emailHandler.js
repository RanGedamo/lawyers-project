const nodemailer = require('nodemailer');

const postContactUs = async(req,res)=>{
    const {userEmail,userCommend} = req.body
    console.log(userEmail,userCommend);
    if(!userEmail || !userCommend) return res.json({massage:"email or commend not found"})
    return await new Promise((resolve, reject) => {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'lawyerandorderthemis@gmail.com',
                pass: 'dqtukwvngshsiind'
            }
        })
        const mail_configs = {
            from:'lawyerandorderthemis@gmail.com',
            to:req.body.userEmail,
            subject:"Contact Us:",
            html:`<h4>Comment from:</h4><h3> ${req.body.userEmail}</h3> </br><h2 style=color:"blue">${req.body.userCommend}</h2>`
        }
        transporter.sendMail(mail_configs, (error)=>{
            if(error){
                console.log(error);
                return reject({message:"an error has occurred"})
            };
            return reject({massage:"Email Sent successfully"})
        } )
    }).then(res=>console.log(res)).catch(res=>console.log(res))
}

module.exports = {postContactUs}