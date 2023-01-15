require("dotenv").config();
require("./DB");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const express = require("express");
const app = express();



app.use(express.json({ limit: "5mb", extended: true })); 
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cors({origin:"*"}));
app.use(helmet());

app.use("/lawyer", require("./routes/lawyerRouter"));
app.use("/category", require("./routes/categoryRouter"));
app.use("/review", require("./routes/reviewRouter"));
app.use("/user", require("./routes/userRouter"));

// const client = require('twilio')(process.env.SID,process.env.AUTH_TOKEN)
 

app.get("/", (req, res) => {
  sendMessageText()
  res.send("server online "); 
});

app.listen(process.env.PORT, () => {
  console.log(`listen to port : ${process.env.PORT}, in http://localhost:${process.env.PORT}/`);
});

// function sendMessageText(){
//   client.messages
//   .create({
//      body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
//      from: '+19294302576',
//      to: '+972506316026'
//    })
//   .then(message => console.log(message.SID)).catch((err)=>console.log(err));
// }