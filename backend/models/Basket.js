const { Schema, model } = require("mongoose");

const basketSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    items:[{ type: Schema.Types.ObjectId, ref: 'Order' }],
    createdAt:{
        type:Date,
        default: Date.now
    }
});

const Basket = new model('Basket',basketSchema);

module.exports = Basket;