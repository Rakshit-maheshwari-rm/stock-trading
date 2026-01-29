const Gtt = require("../models/Gtt");

module.exports.getGtt = async(req,res)=>{
    try {
        const gtt = await Gtt.find({});
        res.send(gtt);
    } catch (error) {
        console.error(error);
        res.json({
            success: false,
            message: "Server error"
        });
    }
};
