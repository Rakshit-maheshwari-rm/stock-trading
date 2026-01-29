const Alert = require("../models/Alert");

module.exports.create = async(req,res)=>{
    try {
        const {name,property,instrument,operator,alertType,value,compareProperty,compareInstrument} = req.body;

        if (!name || !property || !instrument || !operator || !alertType) {
            return res.json({
                success: false,
                message: "Missing required fields"
            });
        }
        const condition = {
            operator,
            type: alertType
        };

        if (alertType === "value") {
            if (value === undefined) {
                return res.json({
                success: false,
                message: "Value is required for value-based alert"
                });
            }
        condition.value = Number(value);
        }

        if (alertType === "instrument") {
            if (!compareProperty || !compareInstrument) {
                return res.json({
                success: false,
                message: "Compare property and instrument are required"
                });
            }
        condition.compareProperty = compareProperty;
        condition.compareInstrument = compareInstrument;
        }

        await Alert.create({
        name,
        property,
        instrument,
        condition
        });
        res.json({
            success: true,
            message: "Alert created successfully"
        });
    } catch (error) {
        console.error(error);
        res.json({
            success: false,
            message: "Server error"
        });
    }
};

module.exports.get = async(req,res) =>{
    try {
        const alert = await Alert.find({});
        res.send(alert);
    } catch (error) {
        console.error(error);
        res.json({
            success:false,
            message:"Server error"
        })
    }
};