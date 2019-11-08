
exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', table => {
        table.increments()
        table.string('recipe_name', 255)
            .notNullable()
            .unique()
    })
    .createTable('ingredients', table => {
        table.increments()
        table.string('ingredient_name', 255)
            .notNullable()
            .unique()
    })
    .createTable('recipe_ingredients', table => {
        table.increments()
        table.float('quantity')
        table.string('measurement')
        table.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipes')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE')
        
        table.integer('ingredient_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('ingredients')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE')
    })
    .createTable('steps', table => {
        table.increments()
        table.integer('step_number')
            .notNullable()
        table.string('instruction', 255)
            .notNullable()
        table.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipes')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE')
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('steps')
    .dropTableIfExists('recipe_ingredients')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
};
