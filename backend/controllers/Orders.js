const Orders = require("../models/Orders");

module.exports.placeOrders = async(req,res) =>{
    try {
        const {name,qty,price,mode} = req.body;
        if (!name || !qty || !price || !mode) {
            return res.json({
                success: false,
                message: "Missing required fields"
            });
        }
         const order = new Orders({
            name,
            qty,
            price,
            mode,
            status: "COMPLETE"
        });
        await order.save();
        res.json({
            success:true,
            message:"Order saved successfully",
        });
    } catch (error) {
        console.error(error);
        res.json({
            success:false,
            message:"Server error",
        })
    }
};

module.exports.getOrder = async(req,res)=>{
    try {
        const orderList = await Orders.find({});
        res.send(orderList);
    } catch (error) {
        console.error(error);
        res.json({
            success: false,
            message: "Server error"
        });
    }
};

module.exports.deleteOrder = async(req,res)=>{
    try {
        const {orderIds} = req.body;
        await Orders.deleteMany({_id:{$in:orderIds}});
        res.json({
            success:true,
            message:"Order deleted successfully",
        })
    } catch (error) {
        console.error(error);
        res.json({
            success: false,
            message: "Server error"
        });
    }
};