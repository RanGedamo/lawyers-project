require("dotenv").config();
require("./DB");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const express = require("express");
const app = express();

app.use(express.json({ extended: true })); 
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cors());
app.use(helmet());

app.use("/lawyer", require("./routes/lawyerRouter"));
app.use("/category", require("./routes/categoryRouter"));
app.use("/review", require("./routes/reviewRouter"));
app.use("/user", require("./routes/userRouter"));
app.use("/emailHandler", require("./routes/emailRouter"));

app.get("/", (req, res) => {
  res.send("server online "); 
});
app.listen(process.env.PORT, () => {
  console.log(`listen to port : ${process.env.PORT}, in http://localhost:${process.env.PORT}/`);
});
