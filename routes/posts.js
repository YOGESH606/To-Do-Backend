const express = require('express');
let post = require('../controllers/posts');

const routers = express.Router();

routers.get('/', post.getPosts);
routers.post('/', post.createPosts);
routers.patch('/:id', post.editPost);
routers.delete('/:id', post.deletePost);

module.exports = routers;
