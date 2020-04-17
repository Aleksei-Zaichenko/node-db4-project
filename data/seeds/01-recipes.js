exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, name: 'Tea'},
        {id: 2, name: 'Coffee'},
        {id: 3, name: 'Apple Pie'}
      ]);
    });
};
