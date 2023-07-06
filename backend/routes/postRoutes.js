const express = require("express");
const cloudinary = require("cloudinary").v2;
const PostSchema = require("../models/postSchema");
const { route } = require("./dalleRoutes");
require('dotenv').config();

const router = express.Router();
router.get("/",(req,res)=>{
    res.json({message:"Mewo"})
})


module.exports = router