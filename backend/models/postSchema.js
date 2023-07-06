const mongose = require('mongoose');

const postSchema = new mongose.Schema({
    name:{
        type:String,
        required:true,
    },
    prompt:{
        type:String,
        required:true,
    },
    photo:{
        type:String,
        required:true,
    }
},{timestamps:true});

const PostSchema = mongose.model('Post',postSchema); 

module.exports = PostSchema;