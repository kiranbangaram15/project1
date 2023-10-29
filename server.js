// console.log("Hello world");

const express = require("express");
const mongoose = require("mongoose");
const app  = express();
// db connection
mongoose
.connect("mongodb+srv://Bangaramkiran:kiran1514@cluster0.pmfirz4.mongodb.net/")
.then(() => {
    console.log("DB CONNECTED");

})
.catch((err) => {
    console.log(err , "something went wrong");
});





app.get("/test",(req,res)=>{
    res.send("hello dj");
});

app .listen(4000, () => {
    console.log("server is connected ");
});