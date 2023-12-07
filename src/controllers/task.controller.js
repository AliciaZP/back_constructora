const TaskModel = require('../model/task.model');

const getAllTasks = async (req, res ) => {
    try {
        const [ result ] = await TaskModel.selectAllTasks();
        res.json(result); 
    } catch (error) {
        res.json({ error: error.message });
    }
}


module.exports = {
    getAllTasks
}