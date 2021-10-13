const md5 = require('md5');

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { name: 'Joao Vitor', email: 'joao.vitor@email.com', passwd_hash: md5('123456') },
        { name: 'Sofia Beiras', email: 'sofia@email.com', passwd_hash: md5('654321') },
        { name: 'Pedro Paulo', email: 'pedro@email.com', passwd_hash: md5('joao@123') },
      ]);
    });
};
