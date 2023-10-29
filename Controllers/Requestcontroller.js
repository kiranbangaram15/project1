const RequestModel = require("../Models/RequestModel");

let createRequest = async (req,res)=>{
    try{
        let data = req.body
        let register  = await RequestModel.create(data)
        return res.status(201).send({status : true,
            msg:"Request Form registered successfully",
            data: register,
        });}
    catch (error) {
        return res.status(500)
        .send({status:false,msg:"internal server error"});
    }
};

module.exports = {createRequest}