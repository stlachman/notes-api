const express = require("express");
const router = express.Router();

const Tasks = require("./todos-model");

router.post("/", (req, res) => {
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

module.exports = router;
