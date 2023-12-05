const router = require('express').Router();

const WorkerController = require('../../controllers/worker.controller')


router.get('/', WorkerController.getAllWorkers );
router.get('/:workerId', WorkerController.getWorkerById );

router.post('/new', WorkerController.createNewWorker );
router.put('/:workerId', WorkerController.updateWorkerById );
router.delete('/:workerId', WorkerController.deleteWorkerById );




module.exports = router;