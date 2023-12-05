
const selectAll = () => {
    return db.query('SELECT * FROM users where role = "worker"');
};
const selectWorkerById = ( id ) => {
    return db.query('SELECT * FROM users where id = ?', [id]);
};
const insertNewWorker = ({
    name,
    surname,
    dni,
    phone,
    email,
    password,
    role = 'worker',
    active = true,
    job,
    city
}) => {
    return db.query(
        'insert into users (name, surname, dni, phone, email, password, role, active, job, city) values (?,?,?,?,?,?,?,?,?,?)', [name, surname, dni, phone, email, password, role, active, job, city ]
    );
};
const updateWorkerById = (
    workerId,
    {
        name,
        surname,
        dni,
        phone,
        email,
        password,
        role,
        active,
        job,
        city
    }
) => {
    return db.query( 'update users set name = ?, surname = ?, dni = ?, phone = ?, email = ?, password = ?, role = ?, active = ?, job = ?, city = ? where id = ?',
    [ name, surname, dni, phone, email, password, role, active, job, city, workerId ]
    )
};


const deleteWorkerById = () => {

};
const insertReport = () => {

};



module.exports = {
    selectAll,
    selectWorkerById,
    insertNewWorker,
    updateWorkerById,
    deleteWorkerById,
    insertReport
}