const router = require('express').Router();

const TaskController = require('../../controllers/task.controller');

router.get('/user/:userId', TaskController.getAllTasks );
router.get('/:taskId', TaskController.getTaskById );
router.get('/worker/:userId/construction/:constructionId', TaskController.getAllTasksByCWId );

router.post('/new', TaskController.createNewTask );
router.put('/:taskId', TaskController.updateTaskById );
router.delete('/:taskId', TaskController.deleteTaskById );


module.exports = router;