const Basket = require("../models/Basket");

module.exports.create = async(req,res)=>{
    try {
        const {name,items} = req.body;
        if (!name || !items) {
            return res.json({
                success: false,
                message: "Missing required fields"
            });
        }
        await Basket.create({
            name:name,
            items:items
        });
        res.json({
            success:true,
            message:"Basket created successfully"
        });
    } catch (error) {
        console.error(error);
        res.json({
            success: false,
            message: "Server error"
        });
    }
};

module.exports.getBasket = async(req,res)=>{
    try {
        const basket = await Basket.find({});
        res.send(basket);
    } catch (error) {
        console.error(error);
        res.json({
            success: false,
            message: "Server error"
        });
    }
};