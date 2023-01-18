const nodemailer = require('nodemailer');
const {supportBoardValid} = require('../validation/handlerEmail');

const postContactUs = async(req,res)=>{
    const {userEmail,userCommend} = req.body
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
const postDomain = async (req, res) => {
    const { error } = supportBoardValid(req.body);
    console.log(error);
    if (error) {
        return res.status(400).send({ message: error.details[0].message });
    }

    return await new Promise((resolve, reject) => {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'lawyerandorderthemis@gmail.com',
                pass: 'dqtukwvngshsiind'
            }
        })
        const mail_configs = {
            from: 'lawyerandorderthemis@gmail.com',
            to: "lawyerandorderthemis@gmail.com",
            subject: "User Domain:",
            html: `<h4>Domain from:</h4><h3> ${req.body.email}</h3> </br><h2 style=color:"blue">${req.body.domain}</h2>`
        }
        transporter.sendMail(mail_configs, (error) => {
            if (error) {
                console.log(error);
                return reject({ message: "an error has occurred" })
            };
            return reject({ massage: "Email Sent successfully" })
        })
    }).then(res => console.log(res)).catch(res => console.log(res))
}

const postContactUsPayment = async(req,res)=>{
    // const {fname,lname,date,phone,message} = req.body
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
            to:"lawyerandorderthemis@gmail.com",
            subject:"Contact Us:",
            html:`<h4>Comment from:</h4><h3> ${req.body.fname+req.body.lname}</h3> </br><h2 style=color:"blue">${req.body.message}</h2></br><h2 style=color:"blue">${req.body.phone}</h2></br><h2 style=color:"blue">${req.body.date}</h2>`
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


module.exports = {postContactUs,postContactUsPayment,postDomain}