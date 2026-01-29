const Watchlist = require('../models/Watchlist');

module.exports.allWatchlist = async(req,res) =>{
    try {
        const watchlist = await Watchlist.find({});
        res.send(watchlist);
    } catch (error) {
        console.error(error);
        res.json({
            success: false,
            message: "Server error"
        });
    }   
};

module.exports.selectWatchlist = async(req,res)=>{
    try {
        const {names} = req.query;
        const watchlist = await Watchlist.find({name: { $in: names }});
        res.send(watchlist);
    } catch (error) {
        console.error(error);
        res.json({
            success:false,
            message:"Server error"
        });
    }
};