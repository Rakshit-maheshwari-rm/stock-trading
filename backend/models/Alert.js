const {Schema, model} = require("mongoose");

const AlertSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    property: {
      type: String,
      required: true,
      enum: [
        "LAST_TRADED_PRICE",
        "HIGH_PRICE",
        "LOW_PRICE",
        "OPEN_PRICE",
        "CLOSE_PRICE",
        "DAY_CHANGE",
        "DAY_CHANGE_PERCENT",
        "INTRADAY_CHANGE",
        "INTRADAY_CHANGE_PERCENT",
        "LAST_TRADED_QUANTITY",
        "AVERAGE_TRADE_PRICE",
        "VOLUME_TRADED",
        "TOTAL_BUY_QUANTITY",
        "TOTAL_SELL_QUANTITY",
        "OPEN_INTEREST",
        "OPEN_INTEREST_DAY_HIGH",
        "OPEN_INTEREST_DAY_LOW"
      ]
    },
    instrument: {
      type: String,
      required: true,
    },
    condition: {
      operator: {
        type: String,
        required: true,
        enum: [">", ">=", "<", "<=", "=="]
      },
      type: {
        type: String,
        required: true,
        enum: ["value", "instrument"]
      },
      value: {
        type: Number,
        required: function () {
          return this.condition.type === "value";
        }
      },
      compareProperty: {
        type: String,
        required: function () {
          return this.condition.type === "instrument";
        }
      },
      compareInstrument: {
        type: String,
        required: function () {
          return this.condition.type === "instrument";
        }
      }
    },
    status: {
      type: String,
      enum: ["ENABLED", "DISABLED"],
      default: "ENABLED"
    },
    triggeredCount: {
      type: Number,
      default: 0
    },
    createdAt:{
        type:Date,
        default: Date.now
    }
});

const Alert = new model('Alert',AlertSchema);

module.exports = Alert;