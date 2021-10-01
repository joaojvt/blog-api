const express = require('express');
const routes = express.Router()
const PostController = require('./controllers/Post');
const { createPostValidator, updatePostValidator } = require('./middlewares/validators/PostValidation');

const postController = new PostController()

routes.get('/post', postController.findAll.bind(postController))
routes.get('/post/:id', postController.findById.bind(postController))
routes.post('/post', createPostValidator, postController.create.bind(postController))
routes.put('/post', updatePostValidator, postController.update.bind(postController))
routes.delete('/post/:id', postController.delete.bind(postController))

module.exports = routes