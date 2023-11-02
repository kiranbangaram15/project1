// console.log("Hello world");

const express = require("express");
const mongoose = require("mongoose");
const app  = express();
const routes = require("./Routes/route");
const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use("/",routes);
// db connection
mongoose
.connect("mongodb+srv://Bangaramkiran:kiran1514@cluster0.pmfirz4.mongodb.net/db")
.then(() => {
    console.log("DB CONNECTED")

})
.catch((err) => {
    console.log(err , "something went wrong")
});





app.get("/test",(req,res)=>{
    res.send("hello dj");
});

app .listen(4000, () => {
    console.log("server is connected ");
});