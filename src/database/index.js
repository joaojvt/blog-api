
const environment = process.env.ENVIRONMENT || 'development'

module.exports = require('knex')({
  client: process.env.DB_CONNECTION,
  connection: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
  },
  migrations: {
    directory: __dirname + '/src/database/migrations',
  },
  seeds: {
    directory: __dirname + '/src/database/seeds',
  },
});