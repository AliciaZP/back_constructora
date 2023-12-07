const router = require('express').Router();

const ConstructionControler = require('../../controllers/construction.controller')


router.get('/', ConstructionControler.getAllWithWorkers );
router.get('/constructionId', ConstructionControler.getConstructionById );
router.post('/new', ConstructionControler.createNewConstruction );
router.put('/constructionId', ConstructionControler.updateContruction );
router.delete('/constructionId', ConstructionControler.deleteConstructionById );






module.exports = router;


// - GET api/construction/
// - GET api/construction/workers
// - GET api/construction/:constructionId
// - POST api/construction/new
// - PUT api/construction/:constructionId
// - DELETE api/construction/:constructionId