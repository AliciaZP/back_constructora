const router = require('express').Router();

const WorkerController = require('../../controllers/worker.controller');
const { checkAdmin } = require('../../helpers/middlewares');


router.get('/', WorkerController.getWorkerWithTasks );
router.get('/:workerId', WorkerController.getWorkerById );
router.get('/cities/:city', WorkerController.getAllWorkersByCity );
router.get('/order/:surname', WorkerController.getAllWorkersByOrderSurname );
router.get('/job/:job', WorkerController.getAllWorkersByJob );
router.get('/active/:active', WorkerController.getAllWorkersByActive );
router.get('/mail/:id', WorkerController.getMailByWorker );


router.post('/new', WorkerController.createNewWorker );
router.put('/:workerId', WorkerController.updateWorkerById );
router.put('/construction/:workerId', WorkerController.updateWorkerConstruction );
router.delete('/:workerId' ,WorkerController.deleteWorkerById );




module.exports = router;