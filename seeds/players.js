
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, Name: 'Bridey'},
        {id: 2, Name: 'Big Dan'},
        {id: 3, Name: 'Sexy Dan'}
      ]);
    });
};
