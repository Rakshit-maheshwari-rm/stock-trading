const Auction = require("../models/Auction");

module.exports.get = async (req,res) => {
    try {
        const auction = await Auction.find({});
        res.send(auction);
    } catch (error) {
        console.error(error);
        res.json({
            success:false,
            message:"Server error"
        });
    }
}