const { Schema, model } = require("mongoose");

const OrdersSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    qty:{
        type:Number,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    mode:{
        type:String,
        enum: ["BUY", "SELL"],
        required:true
    },
    status:{
        type:String,
        enum:["COMPLETE","CANCELLED","REJECTED"],
        required:true
    },
    createdAt: { 
        type: Date,
        default: Date.now 
    }
});

const Orders = new model('Order',OrdersSchema);
module.exports = Orders;