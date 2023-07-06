const express = require("express");
// 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
require('dotenv').config();


const {Configuration,OpenAIApi} = require("openai");

const router = express.Router();

const configuration = new Configuration({
    apiKey:process.env.open_api_key,
})

const openai = new OpenAIApi(configuration);

router.route('/').get((req,res)=>{
    res.json({message:"Success"});
})


router.route('/').post(async (req,res)=>{

    try {
        
        const {prompt} = req.body;
        const aiResponse = openai.createImage({
            prompt,
            n:1,
            size:'1024x1024',
            response_format:'b64_json'
        })
        console.log((await aiResponse).data.data);
        const image = await aiResponse.data.data[0].b64_json;
        res.status(200).json({photo:image});

    } catch (error) {
        console.log(error);
        res.status(500).send(error?.response.data.error.message);
    }

})



module.exports = router;