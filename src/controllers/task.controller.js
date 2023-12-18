const TaskModel = require('../model/task.model');
const WorkerModel = require('../model/worker.model');
const { transporter } = require('../helpers/utils')
 
const getAllTasks = async (req, res ) => {
    try {
        const { userId } = req.params;
        const [ result ] = await TaskModel.selectTaskByUser(userId);
        res.json(result); 
    } catch (error) {
        res.json({ error: error.message });
    }
}

const getAllTasksByCWId = async (req, res ) => {
    try {
        const { constructionId,userId   } = req.params;
        const [ result ] = await TaskModel.selectTaskByConstructionId( constructionId, userId );
        res.json(result); 
    } catch (error) {
        res.json({ error: error.message });
    }
}

const getTaskById = async (req, res) => {
    try {
        const { taskId } = req.params;
        const [ result ] = await TaskModel.selectTaskById( taskId );
        if( result.length === 0 ) return res.json({ fatal: 'El id del Task no existe'});
        res.json( result[0] );
    } catch (error) {
        res.json({ error: error.message });
    }
};

const createNewTask = async (req, res) => {
    try {
        const [ result ] = await TaskModel.insertNewTask( req.body );
        const [ task ] = await TaskModel.selectTaskById( result.insertId );
        console.log(task);
        const [ user ] = await  WorkerModel.selectMailByWorker( task[0].users_id )
        const mailOptions = {
            from: email.user,
            to: user[0].email,
            subject: 'Tarea',
            text: 'Nueva tarea asignada, entre en la app para mas detalles'
        };
        console.log(user[0]);
        transporter.sendMail(mailOptions,  (error, info) => {
            if (error) {
                return console.error(error);
            }
            console.log('Correo electrónico enviado:', info.response);
        })
        res.json( task[0] );
    } catch (error) {
        res.json({ error: error.message });
    }
};

const updateTaskById = async (req, res) => {
    try {
        const { taskId } = req.params;
        const [ result ] = await TaskModel.updateTaskbyId( taskId, req.body );
        const [ task ] = await TaskModel.selectTaskById( taskId );
        console.log(result);
        res.json( task[0] );
    } catch (error) {
        res.json({ error: error.message, fatal: error  });
    }
};

const deleteTaskById = async (req, res) => {
    try {
        const { taskId } = req.params;
        const [ task ] = await TaskModel.selectTaskById( taskId );
        await TaskModel.deleteTaskById( taskId );
        res.json( task[0] );
    } catch (error) {
        res.json({ error: error.message});
    }
};

module.exports = {
    getAllTasks,
    getTaskById,
    createNewTask,
    updateTaskById,
    deleteTaskById,
    getAllTasksByCWId
}