const mongoose = require("mongoose");


let CourseSchema = new mongoose.Schema(
    {
        Course_Name:{
            type:String,
            required:true,
        },
        Course_Subject:{
            type:String,
            required:true,
        },

        Course_Year:{
            type:Number,
            required:true,
        },

        Course_Code:{
            type:String,
            required:true,
        },
    },{timesstamps:true});
    module.exports = new mongoose.model("Course", CourseSchema);