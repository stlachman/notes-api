exports.up = function(knex) {
  return knex.schema
    .createTable("users", users => {
      users.increments();
      users
        .string("name", 128)
        .notNullable()
        .unique();
      users.string("password", 128).notNullable();
    })
    .createTable("todos", todos => {
      todos.increments();
      todos.string("task").notNullable();
      todos.string("category").notNullable();
      todos.string("due_date").notNullable();
      todos.boolean("completed").defaultTo(false);
      todos
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("users").dropTableIfExists("todos");
};
