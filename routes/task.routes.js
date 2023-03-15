const router = require("express").Router();
// const mongoose = require('mongoose');
 
const Task = require('../models/Task.model');
const Project = require('../models/Show.model');
 
//  POST /api/tasks  -  Creates a new task
router.post('/tasks', (req, res, next) => {
  const { title, description, showId } = req.body;
 
  Task.create({ title, description, show: showtId })
    .then(newTask => {
      return Project.findByIdAndUpdate(showId, { $push: { tasks: newTask._id } } );
    })
    .then(response => res.json(response))
    .catch(err => res.json(err));
});
 
module.exports = router;