
exports.seed = function(knex) {
  // Deletes ALL existing entries
      return knex('recipes').insert([
        { recipe_name: "Beef Stroganoff" },
        { recipe_name: "Beef Wellington" },
        { recipe_name: "Caesar Salad" },
        { recipe_name: "Chicken Marengo" },
        { recipe_name: "Eggs Benedict" },
        { recipe_name: "Lobster Newburg" },
        { recipe_name: "Peach Melba" },
        { recipe_name: "Waldorf Salad" }
      ]);
};
