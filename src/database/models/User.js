const CrudModel = require("./CrudModel");

class User extends CrudModel {
  constructor() {
    super('users');
  }
}

module.exports = User;