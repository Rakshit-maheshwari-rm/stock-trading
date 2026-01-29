const Positions = require("../models/Positions");

module.exports.allPositions = async(req,res)=>{
   try {
        let allPositions = await Positions.find({});
        res.send(allPositions);
   } catch (error) {
        console.error(error);
        res.json({
            success: false,
            message: "Server error"
        });
   }
};