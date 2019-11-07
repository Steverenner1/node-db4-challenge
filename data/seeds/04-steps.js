
exports.seed = function(knex, Promise) {
      return knex('steps').insert([
        {
          step_number: 1,
          instruction: "Cook thoroughly",
          recipe_id: 1
        },
        {
          step_number: 2,
          instruction: "Preheat oven",
          recipe_id: 1
        },
        {
          step_number: 3,
          instruction: "Grease pan",
          recipe_id: 2
        },
        {
          step_number: 4,
          instruction: "Mix well",
          recipe_id: 2
        },
        {
          step_number: 5,
          instruction: "Crack eggs",
          recipe_id: 3
        },
        {
          step_number: 6,
          instruction: "Let cool",
          recipe_id: 3  
        }
      ]);
};
