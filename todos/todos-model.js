const db = require("../data/dbConfig");

module.exports = {
  add,
  find,
  findTodo,
  findById,
  update
};

function find() {
  return db("todos");
}

function findTodo(task) {
  return db("todos").where(task);
}

async function add(todo) {
  const [todoId] = await db("todos").insert(todo);
  return findById(todoId);
}

function update(id, changes) {
  return db("todos")
    .where({ id })
    .update(changes);
}

function findById(id) {
  return db("todos")
    .where({ id })
    .first();
}
