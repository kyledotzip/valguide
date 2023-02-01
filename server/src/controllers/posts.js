import PostTip from "../models/postTip.js";

export const getPosts = async (req, res) => {
    try {
        const postTip = await PostTip.find();

        console.log(postTip);

        res.status(200).json(postTip);
    } catch (error) {
        res.status(404).json({ message: error.message});
    }
}

export const createPost = async (req, res) => {
    const body = req.body;

    const newPost = new postTip(post);

    try {
        await newPost.save();
        
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message });
        
    }
}