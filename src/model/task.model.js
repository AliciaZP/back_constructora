const selectAllTasks = () => {
    return db.query('select * from tasks')
};

const selectTaskByUser = ( userId ) => {
    return db.query('select * from tasks where users_id = ?', [ userId ])
}

const selectTaskById = ( taskId ) => {
    return db.query('select * from tasks where id = ?', [ taskId ])
};

const insertNewTask = ({
    title,
    description,
    deadline,
    assignment_date,
    priority,
    Constructions_id,
    users_id
}) => {
    return db.query('insert into tasks (title, description, deadline, assignment_date, priority, Constructions_id, users_id) values (?,?,?,?,?,?,?)', [title, description, deadline, assignment_date, priority, Constructions_id, users_id])
    
};

const updateTaskbyId = (
    taskId,
    {
    title,
    description,
    deadline,
    assignment_date,
    priority,
    Constructions_id,
    users_id
}) => {
    return db.query('update tasks set title = ?, description = ?,deadline = ?, assignment_date = ?, priority = ?, Constructions_id = ?, users_id = ? where id = ?', [title, description, deadline, assignment_date, priority, Constructions_id, users_id, taskId])
};

const deleteTaskById = ( taskId ) => {
    return db.query('delete from tasks where id = ?', [taskId])
};

module.exports = {
    selectAllTasks, 
    selectTaskByUser,
    insertNewTask,
    updateTaskbyId,
    deleteTaskById,
    selectTaskById
}