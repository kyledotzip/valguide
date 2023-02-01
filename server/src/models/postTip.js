import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title: String,
    description: String,
    creator: String,
    tags: [String],
    URL: String,

})

const PostTip = mongoose.model('PostTip', postSchema);

export default PostTip;