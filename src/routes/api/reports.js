const router = require('express').Router();

const ReportController = require('../../controllers/report.controller');
const { checkAdmin } = require('../../helpers/middlewares');


router.get('/', ReportController.getReportWithImage );
// router.get('/images', ReportController.getReportWithImage );
router.get('/:reportId', ReportController.getReportById );
router.get('/type/:type/:constructionId', ReportController.getReportByType );
router.get('/date/:constructionId/:date', ReportController.getReportByOrderDate );


router.post('/new', ReportController.createNewReporter );
router.put('/:reportId', ReportController.updateReporterById );
router.delete('/:reportId', ReportController.deleteReporterById );

module.exports = router;