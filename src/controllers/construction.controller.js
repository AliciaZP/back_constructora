const ConstructionModel = require('../model/construction.model');
const WorkerModel = require('../model/worker.model');
const ReportModel = require('../model/report.model');

const getAllConstructions = async ( req, res ) => {
    try {
        const [ result ] = await ConstructionModel.selectAllConstructions();
        res.json( result );
    } catch (error) {
        res.json({ error: error.message });
    }
}

const getAllWithWorkers = async ( req, res ) => {
    try {
        const [ result ] = await ConstructionModel.selectAllConstructions();
        
        for (let construction of result ){
            const [ worker ] = await WorkerModel.selectByConstruction( construction.id );
            construction.workers = worker;
            const [ reports ] = await ReportModel.selectReportbyConstruction( construction.id );
            construction.reports = [];
            
            
            for(let report of reports){
                const [ images ] = await ReportModel.selectAllImages( report.id );
                report.images = images;
            }
            
            construction.reports = reports;
        }
        
        
        res.json( result );
    } catch (error) {
        res.json({ error: error.message });
    }
};
const getConstructionWithWorkers = async ( req, res ) => {
    try {
        const { constructionId } = req.params;
        const [ result ] = await ConstructionModel.selectConstructionById( constructionId );

        for(let construction of result ){
            const [ worker ] = await WorkerModel.selectByConstruction( construction.id );
            construction.workers = worker;
        }
        res.json( result[0] );

    } catch (error) {
        res.json({ error: error.message })
    }
};

const getConstructionById = async ( req, res ) => {
    try {
        const { constructionId } = req.params;

        const [ result ] = await ConstructionModel.selectConstructionById( constructionId );
        console.log( constructionId );
        if( result.length === 0 ) return res.json({ error: 'El id de la construccion no existe' });
        res.json( result[0] );
    } catch (error) {
        res.json({ error: error.message });
    }
}


const getConstructionWithReports = async ( req, res ) => {
    try {
        const { constructionId } = req.params;
        const [ result ] = await ConstructionModel.selectConstructionById( constructionId );

        for(let construction of result ){
            const [ report ] = await ReportModel.selectReportbyConstruction( construction.id );
            construction.reports = report;
        }
        res.json( result[0] );
    } catch (error) {
        res.json({ error: error.message })
    }
};

const createNewConstruction = async ( req, res ) => {
    try {
        const body = req.body;
        const [ result ] = await ConstructionModel.createNewConstruction( body );
        const [ construction ] = await ConstructionModel.selectConstructionById( result.insertId );
        res.json( construction[0] );
    } catch (error) {
        res.json({ error: error.message });
    }
};

const updateContruction = async ( req, res ) => {
    try {
        const { constructionId } = req.params;
        const [ result ] = await ConstructionModel.updateConstructionById( constructionId, req.body );
        const [ construction ] = await ConstructionModel.selectConstructionById( constructionId);
        res.json( construction[0] );
    } catch (error) {
        res.json({ error: error.message });
    }
};

const deleteConstructionById = async ( req, res ) => {
    try {
        const { constructionId } = req.params;
        const [ construction ] = await ConstructionModel.selectConstructionById( constructionId );
        await ConstructionModel.deleteConstructionById( constructionId );
        res.json(construction[0])
    } catch (error) {
        res.json({ error: error.message });
    }
};


module.exports = {
    getAllConstructions,
    getConstructionById,
    updateContruction,
    deleteConstructionById,
    createNewConstruction,
    getAllWithWorkers,
    getConstructionWithWorkers,
    getConstructionWithReports
}