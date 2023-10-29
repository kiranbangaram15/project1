const DonateModel = require("../Models/DonateModel");
let createDonate = async (req,res)=>{
    try{
        let data = req.body
        let register  = await DonateModel.create(data)
        return res.status(201).send({status : true,
            msg:"Blood donation form registered successfully",
            data: register,
        });}
    catch (error) {
        return res.status(500)
        .send({status:false,msg:"internal server error"});
    }
};

module.exports = {createDonate}