const mongoose = require('mongoose')

const goldSchema = new mongoose.Schema({
    Date: { type: String, required: true },
    Close: { type: String, required: true }
})

const goldData = mongoose.model("Gold", goldSchema)

module.exports = {goldData}