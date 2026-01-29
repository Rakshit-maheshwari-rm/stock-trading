const { Schema, model } = require("mongoose");

const auctionSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    qty:{
        type:Number,
        required:true,
        default:1
    },
    lastPrice:{
        type:Number,
        required:true
    },
    currentPrice:{
        type:Number,
        required:true        
    },
    profit:{
        type:Number,
        required:true           
    },
    auctionNumber:{
        type:Number,
        required:true            
    }
});

const Auction = new model('Auction',auctionSchema);

module.exports = Auction;