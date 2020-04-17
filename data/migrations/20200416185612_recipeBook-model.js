
exports.up = function(knex) {
return knex.schema
    .createTable('recipes', tbl => {
        tbl.string('id',255).primary();
        tbl.string('name',255).notNullable().unique().index();
    })
    .createTable('ingredients', tbl =>{
        tbl.string('id',255).primary();
        tbl.string('name',255).notNullable().unique().index();
    })
    .createTable('instructions', tbl =>{
        tbl.string('id',255).primary();
        tbl.text('instruction_description').notNullable();
        tbl.integer('step_number').notNullable();

        //foreign key
        tbl
            .string('recipe_id',255)
            .notNullable()
            .references('id')
            .inTable('recipes')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE');

        //foreign key
        tbl
            .string('ingredient_id',255)
            .notNullable()
            .references('id')
            .inTable('ingredients')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE');

        tbl.integer('ingredient_quantity').notNullable();
        tbl.unique(['recipe_id', 'ingredient_id']);
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('instructions')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes');
};
