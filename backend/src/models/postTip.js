import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title: String,
    description: String,
    creator: String,
    tag: String,
    url: String,

})

const PostTip = mongoose.model('PostTip', postSchema);

export default PostTip;