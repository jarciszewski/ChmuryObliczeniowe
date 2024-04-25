const { goldData } = require("../models/gold")
const asyncHandler = require('express-async-handler')

const getGold = asyncHandler(async (req,res) =>{
    const gold = await goldData.findById(req.params.id)

    res.status(200).json({data: gold})
})

const getGolds = asyncHandler(async (req,res) =>{
    const gold = await goldData.find();

    res.status(200).json({data: gold})
})

module.exports = {getGold, getGolds}