
const CrudController = require('./CrudController');
const path = require('path');

const Post = require(path.resolve('src', 'database', 'models', 'Post'))

const PostModel = new Post();

class PostController extends CrudController {
  constructor() {
    super(PostModel)
  }
}


module.exports = PostController