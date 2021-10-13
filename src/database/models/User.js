const md5 = require("md5");
const path = require('path');
const knex = require(path.resolve('src', 'database'))

const CrudModel = require("./CrudModel");

class User extends CrudModel {
  constructor() {
    super('users');
  }

  async findByEmailAndPassword(email, password) {
    return await knex(this.table)
      .where({ email: email, passwd_hash: md5(password) })
      .select('id')
      .first()
  }
}

module.exports = User;