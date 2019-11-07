
exports.seed = function(knex) {
      return knex('ingredients').insert([
        { ingredient_name: "Beef" },
        { ingredient_name: "Chicken" },
        { ingredient_name: "Eggs" },
        { ingredient_name: "Flour" },
        { ingredient_name: "Walnuts" },
        { ingredient_name: "Tomatoes" },
        { ingredient_name: "Olive Oil" },
        { ingredient_name: "Cheese" },
      ]);
};
