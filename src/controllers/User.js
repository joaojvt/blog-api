const CrudController = require("./CrudController");
const path = require('path');

const User = require(path.resolve('src', 'database', 'models', 'User'))

class UserController extends CrudController {
  constructor() {
    super(new User());
  }
}

module.exports = new UserController();