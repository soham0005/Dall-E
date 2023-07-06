const express = require('express');
const cors = require('cors');
require("dotenv").config();
const app = express();

const { connectDB } = require('./db/connect');
const dalleRoutes = require("./routes/dalleRoutes")
const postRoutes = require("./routes/postRoutes");

app.use(express.json({limit:'50mb'}));
app.use(express.urlencoded({extended:false}));
app.use(cors());

app.use('/api/post',postRoutes);
app.use('/api/dalle',dalleRoutes);


app.get('/',async (req,res)=>{
    res.status(404).json({status:"Success",message:"Hello From Dall-E AI"});
})





connectDB(process.env.mongo_url)
        .then(()=>{
            console.log("Database Connected")
        })
        .catch((err)=>{
            console.log("Database Not Connected:",err);
        })


app.listen(8000,()=>{
    console.log("Server Running...");
})

