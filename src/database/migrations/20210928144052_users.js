
exports.up = function (knex) {
  return knex.schema
    .createTable('users', function (table) {
      table.increments('id').primary();
      table.string('name', 255).notNullable();
      table.string('email', 255).unique();
      table.timestamp('email_verified_at', { precision: 6 })
      table.dateTime('created_at').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP'))
      table.dateTime('updated_at').defaultTo(knex.raw('NULL ON UPDATE CURRENT_TIMESTAMP'))
    })
    .createTable('posts', function (table) {
      table.increments('id').primary();
      table.string('title', 100).notNullable();
      table.string('content', 500).notNullable();
      table.integer('user_id').unsigned().references('id').inTable('users').notNullable()
      table.dateTime('created_at').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP'))
      table.dateTime('updated_at').defaultTo(knex.raw('NULL ON UPDATE CURRENT_TIMESTAMP'))
    })
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('posts')
    .dropTableIfExists('users')
};
