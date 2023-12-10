// api/task/router.js

const express = require('express');
const taskModel = require('./model');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const tasks = await taskModel.getTasks();
    const formattedTasks = tasks.map((task) => {
      task.task_completed = !!task.task_completed;
      return task;
    });
    res.status(200).json(formattedTasks);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const newTask = req.body;
    const task = await taskModel.addTask(newTask);
    task[0].task_completed = !!task[0].task_completed;
    res.status(201).json(task[0]);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
