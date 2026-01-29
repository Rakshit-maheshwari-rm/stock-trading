const { Schema, model } = require("mongoose");

const WatchlistSchema = new Schema({
    name:{
        type:String,
        Required:true
    },
    price:{
        type:Number,
        Required:true
    },
    change:{
        type:Number,
        Required:true
    },
    percent:{
        type:String,
        Required:true
    },
    isDown:{
        type:Boolean,
        Required:true
    }
});

const Watchlist = new model('Watchlist',WatchlistSchema);
module.exports= Watchlist;