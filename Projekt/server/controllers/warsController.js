const { warData } = require("../models/war")
const asyncHandler = require('express-async-handler')

const getWar = asyncHandler(async (req,res) =>{
    let war = await warData.findById(req.params.id)

    res.status(200).json({data: war})
})

const getWars = asyncHandler(async (req,res) =>{
    //const war = await warData.find().select("start_date ep_end_date");

    const war = await warData.find().select("name start end").sort({start:1});

    res.status(200).json({data: war})
})

// const getWars = asyncHandler(async (req,res) =>{
//     const war = await warData.find();

//     res.status(200).json({data: war})
// })

module.exports = {getWar, getWars}