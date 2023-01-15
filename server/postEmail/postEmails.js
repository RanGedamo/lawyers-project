const nodemailer = require('nodemailer');

const sendEmail = (rate,email,comments,userEmail) => {
    return new Promise((resolve, reject) => {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'tech.career.campus@gmail.com',
                pass: 'sqkduayyxqtoazut'
            }
        })
        const mail_configs = {
            from:'tech.career.campus@gmail.com',
            to:email,
            subject:"testing our nodemailer",
            html:`<h4>Comment from:</h4><h3> ${userEmail}</h3> </br><h2 style=color:"blue">${comments}</h2><h2>${rate}</h2>`
      
        }
        transporter.sendMail(mail_configs, (error)=>{
            if(error){
                console.log(error);
                return reject({message:"an error has occurred"})
            };
            return reject({massage:"Email Sent successfully"})
        } )
    })
}

module.exports={sendEmail}