const Sip = require("../models/Sip");

module.exports.create = async(req,res)=>{
    try {
        const {name,date,time,baskets} = req.body;  
        if(!name || !date || !time || !baskets){
             return res.json({
                success: false,
                message: "Missing required fields"
            });
        }
        await Sip.create({
            name:name,
            date:date,
            time:time,
            baskets:baskets
        });
        res.json({
            success:true,
            message:"SIP created successfully"
        });
    } catch (error) {
        console.error(error);
        res.json({
            success:false,
            message:"Server error"
        });
    }
};

module.exports.get = async(req,res)=>{
    try {
        const sips = await Sip.find({}).populate("baskets","name");
        res.send(sips);
    } catch (error) {
        console.error(error);
        res.json({
            success: false,
            message: "Server error"
        });
    }
};