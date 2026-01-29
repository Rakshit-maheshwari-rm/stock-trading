const { Schema, model } = require("mongoose");

const GttSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    qty:{
        type:Number,
        required:true
    },
    status:{
        type:String,
        enum:["ACTIVE","TRIGGERED"],
        required:true
    },
    createdAt:{
        type:Date,
        default: Date.now
    }
})

const Gtt = new model("Gtt",GttSchema);
module.exports = Gtt;