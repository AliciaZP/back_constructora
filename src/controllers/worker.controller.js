const bcrypt = require('bcryptjs');

const WorkerModel = require('../model/worker.model')
const TaskModel = require('../model/task.model')

const getAllWorkers = async ( req, res ) => {
    try {
        const [ result ] = await WorkerModel.selectAll()
        res.json( result )
    } catch (error) {
        res.json( { error: error.message } );
    }
};

const getAllWorkersByOrderSurname = async ( req, res ) => {
    try {
        const { surname } = req.params;
        const [ result ] = await WorkerModel.selectWorkerBySurname( surname );
        res.json( result )
    } catch (error) {
        res.json( { error: error.message } );
    }
};
const getAllWorkersByCity = async ( req, res ) => {
    try {
        const { city } = req.params;
        const [ result ] = await WorkerModel.selectWorkerByCity(city);
        res.json( result )
    } catch (error) {
        res.json( { error: error.message } );
    }
};
const getAllWorkersByJob = async ( req, res ) => {
    try {
        const { job } = req.params;
        const [ result ] = await WorkerModel.selectWorkerByJob( job );
        res.json( result )
    } catch (error) {
        res.json( { error: error.message } );
    }
};
const getAllWorkersByActive = async ( req, res ) => {
    console.log( 'estoy aqui')
    try {
        const { active } = req.params;
        const [ result ] = await WorkerModel.selectWorkerByActive( active );
        res.json( result )
    } catch (error) {

        res.json( { error: error.message, hola: 'algo pasa' } );
    }
};


const getWorkerWithTasks = async ( req, res ) => {
    try {
        const [ result ] = await WorkerModel.selectAll();

        for(let worker of result){
            const [ tasks ] = await TaskModel.selectTaskByUser( worker.id );
            worker.tasks = tasks;
        }

        res.json( result );
    } catch (error) {
        res.json( { error: error.message } );
    }
};

const getWorkerById = async ( req, res ) => {
    try {
        const { workerId } = req.params;
        
        const [ result ] = await WorkerModel.selectWorkerById( workerId );
        if( result.length === 0 ) return res.json( { error: 'El id del cliente no existe'});
        res.json( result[0]);
    } catch (error) {
        res.json( { error: error.message } );
    }
};

const createNewWorker = async ( req, res ) => {
    try {
        req.body.password = bcrypt.hashSync(req.body.password, 8);
        
        const [ result ] = await WorkerModel.insertNewWorker( req.body );
        const [ worker ] = await WorkerModel.selectWorkerById( result.insertId );
        console.log( worker );
        console.log( result );
        res.json( worker[0] );
    } catch (error) {
        res.json( { error: error.message } );
    }
};

const updateWorkerById = async ( req, res ) => {
    try {
        const { workerId } = req.params;
        const [ result ] = await WorkerModel.updateWorkerById( workerId, req.body );
        const [ worker ] = await WorkerModel.selectWorkerById( workerId );
        res.json( worker[0] );
    } catch (error) {
        res.json( { error: error.message } );
    }
};

const updateWorkerConstruction = async ( req, res ) => {
    try {
        const { workerId } = req.params;
        const [ result ] = await WorkerModel.assignConstructionToWorker( workerId, req.body );
        const [ worker ] = await WorkerModel.selectWorkerById( workerId );
        console.log( 'estoy aqui' );
        res.json( worker[0] );
    } catch (error) {
        console.error( error.message );
    }
};

const deleteWorkerById = async ( req, res ) => {
    try {
        const { workerId } = req.params;
        const [ worker ] = await WorkerModel.selectWorkerById( workerId );
        await WorkerModel.deleteWorkerById( workerId );
        res.json( worker[0] );
    } catch (error) {
        res.json( { error: error.message } );
    }
};




module.exports = {
    getAllWorkers,
    getWorkerById,
    createNewWorker,
    updateWorkerById,
    deleteWorkerById,
    getWorkerWithTasks,
    getAllWorkersByCity,
    getAllWorkersByJob,
    getAllWorkersByOrderSurname,
    updateWorkerConstruction,
    getAllWorkersByActive
    
}