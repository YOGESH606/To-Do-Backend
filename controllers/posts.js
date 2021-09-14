const mongoose = require('mongoose');
const postMessage = require('../models/postMessage.js');

const getPosts = async (req, res) => {
    try {
        const postMessages = await postMessage.find();
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}
const createPosts = async (req, res) => {
    const post = req.body;
    const newPost = new postMessage(post);
    try {
        newPost.save(newPost);
        res.status(201).json(newPost);
    } catch (error) {
        res.status(404).json({ message: error.message })
        console.log(error);
    }
}
const editPost = async (req, res) => {
    try {
        const post = req.body;
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).send('no post with that id  is available in db');
        }
        const updatedPost = await postMessage.findByIdAndUpdate(id, post, { new: true });
        res.json(updatedPost);

    } catch (error) {
        res.status(404).json({ message: error.message })
        console.log(error);
    }
}
const deletePost = async (req, res) => {
    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).send('no post with that id  is available in db');
        }
        await postMessage.findByIdAndRemove(id);
        res.json('post deleted succesfully');

    } catch (error) {
        res.status(404).json({ message: error.message })
        console.log(error);
    }
}
module.exports = {
    getPosts,
    createPosts,
    editPost,
    deletePost
}