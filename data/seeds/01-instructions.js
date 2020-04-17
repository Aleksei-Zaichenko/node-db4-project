
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {
          id: 1, instruction_description: 'boil water', 
          step_number: '1', recipe_id: 1, 
          ingredient_id: 1, ingredient_quantity: '1 liter'
        },
        {
          id: 2, instruction_description: 'choose a tea bag', 
          step_number: '2', recipe_id: 1, 
          ingredient_id: 4, ingredient_quantity: 1
        },
        {
          id: 3, instruction_description: 'put tea bag in teapot and poor hot water in', 
          step_number: '3', recipe_id: 1, 
          ingredient_id: 5, ingredient_quantity: 1
        }
      ]);
    });
};
