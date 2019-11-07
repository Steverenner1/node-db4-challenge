const db = require('../data/db-config.js');

function getRecipes() {
    return db('recipes')
}

function getShoppingList(id) {
    return db('recipe_ingredients as ri')
        .innerJoin('recipes as r', 'ri.recipe_id', 'r.id')
        .select('r.recipe_name', 'i.ingredient_name', 'ri.quantity', 'ri.measurement')
        .where('r.id', id)
}

function getInstructions(id) {
    return db('steps')
    .where('recipe_id', id)
}

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}