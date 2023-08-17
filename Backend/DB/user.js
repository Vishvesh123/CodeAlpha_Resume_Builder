const mongoose=require('mongoose');


const userSchema= new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    password2:String
});

module.exports=mongoose.model("users",userSchema);