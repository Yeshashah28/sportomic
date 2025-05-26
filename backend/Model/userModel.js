const mongoose=require("mongoose");

const user=mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true},
    contact:{type:String, required:true},
    venue:{type:String, required:true},
    date:{type:String, required:true},
    time:{type:String,required:true}   
})

const userModel=mongoose.model("userModel",user);
module.exports=userModel;