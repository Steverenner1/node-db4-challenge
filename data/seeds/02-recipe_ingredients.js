
exports.seed = function(knex, Promise) {
      return knex('recipe_ingredients').insert([
        { recipe_id: 1, ingredient_id: 1, quantity: 1, measurement: 'pound' },
        { recipe_id: 1, ingredient_id: 2, quantity: 1, measurement: 'teaspoon' },
        { recipe_id: 2, ingredient_id: 3, quantity: 4, measurement: 'cup' },
        { recipe_id: 2, ingredient_id: 4, quantity: 2, measurement: 'ounces' },
        { recipe_id: 3, ingredient_id: 5, quantity: 1 },
        { recipe_id: 3, ingredient_id: 6, quantity: 1 },
        { recipe_id: 4, ingredient_id: 7, quantity: 3 },
        { recipe_id: 4, ingredient_id: 8, quantity: 1 }
      ]);
};
