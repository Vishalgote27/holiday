const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: "user"
    },

    holidayId: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: "holiday"
    },


}, { timestamps: true })


module.exports = mongoose.model("order", orderSchema)