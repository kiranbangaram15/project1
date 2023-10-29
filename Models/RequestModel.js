const mongoose = require("mongoose");

let requestSchema = new mongoose.Schema({
    User_Name:{
        type:String,
        required:true
    },
    Email_Id:{
        type:String,
        required:true,
        unique:true,
    },
     Usn:{
        type:String,
        required:true,
        unique:true,
     },
     Gender:{
        type:String,
        required:true,
        unique:true,
     },
     Mobile:{
        type:Number,
        required:true,
        unique:true,
     },

     Password:{
        type:String,
        required:true,
        unique:true,
     },

},{timesstamps:true});

module.exports = new mongoose.model("request",requestSchema);