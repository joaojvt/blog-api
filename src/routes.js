const express = require('express');
const routes = express.Router()
const postController = require('./controllers/Post');

const {
  createPostValidator,
  updatePostValidator
} = require('./middlewares/validators/PostValidation');

routes.get('/post', postController.findAll.bind(postController))
routes.get('/post/:id', postController.findById.bind(postController))
routes.post('/post', createPostValidator, postController.create.bind(postController))
routes.put('/post', updatePostValidator, postController.update.bind(postController))
routes.delete('/post/:id', postController.delete.bind(postController))

module.exports = routes