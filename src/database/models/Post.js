const CrudModel = require('./CrudModel');

class Post extends CrudModel {
  constructor() {
    super('posts')
  }
}

module.exports = Post
