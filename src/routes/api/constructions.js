const router = require('express').Router();

const ConstructionControler = require('../../controllers/construction.controller');
const { checkAdmin } = require('../../helpers/middlewares');


router.get('/', ConstructionControler.getAllConstructions );
router.get('/:constructionId', ConstructionControler.getConstructionWithWorkers );
router.get('/reports/:constructionId', ConstructionControler.getConstructionWithReports );
router.post('/new', checkAdmin,ConstructionControler.createNewConstruction );
router.put('/:constructionId', checkAdmin,ConstructionControler.updateContruction );
router.delete('/:constructionId',checkAdmin ,ConstructionControler.deleteConstructionById );






module.exports = router;


