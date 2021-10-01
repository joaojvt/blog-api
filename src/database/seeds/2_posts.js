
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        { title: 'Titulo 1', content: 'Conteudo 1', user_id: 1 },
        { title: 'Titulo 2', content: 'Conteudo 2', user_id: 1 },
        { title: 'Titulo 3', content: 'Conteudo 3', user_id: 2 }
      ]);
    });
};
