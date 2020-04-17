
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
  .then(function () {
    // Inserts seed entries
    return knex('ingredients').insert([
      {id: 1, name: 'Hot water'},
      {id: 2, name: 'Coffee seeds'},
      {id: 3, name: 'apples'},
      {id: 4, name: 'tea bag'},
      {id: 5, name: 'teapot'},
    ]);
  });
};