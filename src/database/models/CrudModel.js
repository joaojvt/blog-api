const path = require('path');
const knex = require(path.resolve('src', 'database'))

class CrudModel {

  constructor(table) {
    this.table = table
  }

  async findAll() {
    return await knex.select('*').from(this.table)
  }

  async findById(id) {
    return await knex(this.table).where('id', id).first()
  }

  async insert(obj) {
    return await knex(this.table).insert(obj)
  }

  async update(obj) {
    const { id } = obj
    return await knex(this.table).where('id', id).update(obj)
  }

  async delete(id) {
    return await knex(this.table).where('id', id).delete()
  }

}

module.exports = CrudModel