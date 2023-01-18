const mongoose=require("mongoose");

const db_connection=process.env.DB_CONNECTION;
mongoose.set('strictQuery', false);
mongoose.connect(db_connection,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{console.log("Connection to db succeed")})
.catch((err)=>{console.error("connection failed",err.massage)})


module.exports=mongoose.connection;