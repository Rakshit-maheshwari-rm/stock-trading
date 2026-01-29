const { Schema, model } = require("mongoose");

const SipSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: Number,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  baskets: [
    {
      type: Schema.Types.ObjectId,
      ref: "Basket",
      required: true
    }
  ],
  status: {
    type: String,
    enum: ["Active", "Paused"],
    default: "Active"
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Sip = new model("Sip",SipSchema);

module.exports = Sip;