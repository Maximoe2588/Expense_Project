exports.up = function(knex) {
    return knex.schema.createTable('expenses', function(table) {
        table.increments('id').primary();
        table.decimal('amount').notNullable();
        table.string('description', 255).notNullable();
        table.string('category', 255).notNullable();
        table.date('date').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('expenses');
  };
  
