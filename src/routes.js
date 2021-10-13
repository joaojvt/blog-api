const express = require('express');
const routes = express.Router()

const postController = require('./controllers/Post');
const userController = require('./controllers/User');

const {
  createPostRules,
  updatePostRules
} = require('./middlewares/validators/PostValidation');
const {
  createUserRules,
  updateUserRules
} = require('./middlewares/validators/UserValidator');

routes.post('/login', userController.login.bind(userController));

routes.get('/user', userController.findAll.bind(userController))
routes.get('/user/:id', userController.findById.bind(userController))
routes.post('/user', createUserRules, userController.create.bind(userController))
routes.put('/user', updateUserRules, userController.update.bind(userController))
routes.delete('/user/:id', userController.delete.bind(userController))

routes.get('/post', postController.findAll.bind(postController))
routes.get('/post/:id', postController.findById.bind(postController))
routes.post('/post', createPostRules, postController.create.bind(postController))
routes.put('/post', updatePostRules, postController.update.bind(postController))
routes.delete('/post/:id', postController.delete.bind(postController))

module.exports = routes