const express = require("express");
const router = express.Router();

const Tasks = require("./todos-model");

router.post("/", validateTask, (req, res) => {
  const task = req.body;
  Tasks.add(task)
    .then(newTask => {
      res.status(201).json(newTask);
    })
    .catch(err => {
      res.status(500).json({ message: "Error creating task" });
    });
});

router.get("/", (req, res) => {
  Tasks.find()
    .then(tasks => {
      res.status(200).json(tasks);
    })
    .catch(err => {
      res.status(500).json({ message: "Error retrieving tasks" });
    });
});

function validateTask(req, res, next) {
  const currentTask = req.body;
  if (
    currentTask &&
    currentTask.task &&
    currentTask.category &&
    currentTask.due_date &&
    currentTask.user_id
  ) {
    next();
  } else {
    res.status(400).json({ message: "You are missing a required field" });
  }
}

module.exports = router;
