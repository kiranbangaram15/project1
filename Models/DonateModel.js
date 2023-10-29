const mongoose = require("mongoose");

let donateSchema = new mongoose.Schema({
    User_Name:{
        type:String,
        required:true
    },
    Email_Id:{
        type:String,
        required:true,
        unique:true,
    },
     Blood_type:{
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

},{timesstamps:true});

module.exports = new mongoose.model("donate",donateSchema);