
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { name: 'Joao Vitor', email: 'joao.vitor@email.com' },
        { name: 'Sofia Beiras', email: 'sofia@email.com' },
        { name: 'Pedro Paulo', email: 'pedro@email.com' },
      ]);
    });
};
