const selectAllTasks = () => {
    return db.query('select * from tasks')
};

const selectTaskByUser = ( userId ) => {
    return db.query('select * from tasks where users_id = ?', [ userId ])
}


module.exports = {
    selectAllTasks, 
    selectTaskByUser
}