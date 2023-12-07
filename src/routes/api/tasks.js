const router = require('express').Router();

const TaskController = require('../../controllers/task.controller');

router.get('/', TaskController.getAllTasks );



module.exports = router;