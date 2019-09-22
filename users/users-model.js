const db = require("../data/dbConfig");

module.exports = {
  add,
  find,
  findUser,
  findById,
  findUserTasks
};

function find() {
  return db("users");
}

function findUser(name) {
  return db("users").where(name);
}

async function add(user) {
  const [userId] = await db("users").insert(user);
  return findById(userId);
}

function findById(id) {
  return db("users")
    .where({ id })
    .first();
}

function findUserTasks(id) {
  return db("todos").where("user_id", id);
}
