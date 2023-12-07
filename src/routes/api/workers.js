const router = require('express').Router();

const WorkerController = require('../../controllers/worker.controller');
const { checkAdmin } = require('../../helpers/middlewares');


router.get('/', WorkerController.getWorkerWithTasks );
router.get('/:workerId', WorkerController.getWorkerById );

router.post('/new',checkAdmin, WorkerController.createNewWorker );
router.put('/:workerId',checkAdmin, WorkerController.updateWorkerById );
router.delete('/:workerId',checkAdmin ,WorkerController.deleteWorkerById );




module.exports = router;