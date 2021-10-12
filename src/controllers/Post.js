const CrudController = require('./CrudController');
const path = require('path');

const Post = require(path.resolve('src', 'database', 'models', 'Post'))

class PostController extends CrudController {
  constructor() {
    super(new Post())
  }
}

module.exports = new PostController();