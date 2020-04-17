const db = require('../data/db-config.js');

module.exports= {
    getRecipes,
    getShoppingList,
    getInstructions
}

function getRecipes(){
    return db('recipes');
}

function getShoppingList(passedId){
    return db('instructions')
        .where('recipe_id', passedId)
        .join('ingredients', 'instructions.ingredient_id', 'ingredients.id')
        .select('ingredients.name', 'instructions.ingredient_quantity');
}

function getInstructions(passedId){
    return db.select('instruction_description', 'step_number').from('instructions')
        .where('recipe_id', passedId)
}