const ReportModel = require('../model/report.model');

const getReportWithImage = async ( req, res ) => {
    try {
        const [ result ] = await ReportModel.selectAllReports();

        for(let report of result){
            const [ images ] = await ReportModel.selectAllImages( report.id );
            report.images = images;
        }

        res.json( result );
    } catch (error) {
        res.json({ error: error.message });
    }
};

const getReportByType = async ( req, res ) => {
    try {
        const { type, constructionId } = req.params;
        const [ result ] = await ReportModel.selectReportByType( type, constructionId );
        
        res.json( result );
    } catch (error) {
        res.json({ error: error.message });
    }
};

const getReportByOrderDate = async ( req, res ) => {
    try {
        const { date , constructionId } = req.params;
        const [ result ] = await ReportModel.selectReportByOrderDate( date, constructionId );
        
        res.json( result );
    } catch (error) {
        res.json({ error: error.message });
    }
};



const getReportById = async ( req, res ) => {
    try {
        const { reportId } = req.params;
        const [ result ] = await ReportModel.selectReportById( reportId );
        if( result.length === 0 ) return res.json({ error: 'El id del reporte no existe' });
        res.json( result[0] );
    } catch (error) {
        res.json({ error: error.message });
    }
};

const getAllReports = async (req, res ) => {
    try {
        const [ result ] = await ReportModel.selectAllReports();
        res.json( result );
    } catch (error) {
        res.json({ error: error.message });
    }
};

const getReportByWorker = async ( req, res ) => {
    try {
        const worker_id = req.user.id;
        const [ result ] = await ReportModel.selectReportbyWorker( worker_id );
        res.json( result );
    } catch (error) {
        res.json({ error: error.message });
    }
};



const createNewReporter = async ( req, res) => {
    try {
        const body = req.body;
        const [ result ] = await ReportModel.createNewReporter( body );
        const [ report ] = await ReportModel.selectReportById( result.insertId );
        res.json( report[0] )
    } catch (error) {
        res.json({ error: error.message });
    }
};

const updateReporterById = async ( req, res ) => {
    try {
        const { reportId } = req.params;
        const [ result ] = await ReportModel.updateReporterById( reportId, req.body );
        const [ report ] = await ReportModel.selectReportById( reportId );
        res.json( report[0] );
    } catch (error) {
        res.json({ error: error.message });
    }
};

const deleteReporterById = async ( req, res) => {
    try {
        const { reportId } = req.params;
        const [ report ] = await ReportModel.selectReportById( reportId );
        await ReportModel.deleteReporterById( reportId );
        res.json( report[0] );
    } catch (error) {
        res.json({ error: error.message });
    }
};




module.exports = {
    
    getReportByWorker,
    createNewReporter,
    deleteReporterById,
    getAllReports,
    getReportById,
    updateReporterById,
    getReportWithImage,
    getReportByType,
    getReportByOrderDate
}