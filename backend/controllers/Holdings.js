const Holdings = require("../models/Holdings");

module.exports.allHoldings = async(req,res)=>{
    try {
        let allHoldings = await Holdings.find({});
        res.send(allHoldings);
    } catch (error) {
        console.error(error);
        res.json({
            success: false,
            message: "Server error"
        });
    }
};