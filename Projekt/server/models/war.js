const mongoose = require('mongoose')

const warSchema = new mongoose.Schema({
    Name: { type: String, required: true },
    Start: { type: Number, required: true },
    End: {type: Number, required: true}
})

const warData = mongoose.model("War", warSchema)

module.exports = {warData}