
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
    city,
    Constructions_id,
    image,
}) => {
    return db.query(
        'insert into users (name, surname, dni, phone, email, password, role, active, job, city, Constructions_id ,image) values (?,?,?,?,?,?,?,?,?,?,?,?)', [name, surname, dni, phone, email, password, role, active, job, city,Constructions_id, image ]
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
        city,
        Constructions_id,
        image
    }
    ) => {
        return db.query( 'update users set name = ?, surname = ?, dni = ?, phone = ?, email = ?, password = ?, role = ?, active = ?, job = ?, city = ?, Constructions_id = ?, image = ?  where id = ?',
        [ name, surname, dni, phone, email, password, role, active, job, city, Constructions_id, image,  workerId ]
        )
};


const deleteWorkerById = ( workerId ) => {
    return db.query( 'delete from users where id = ?', [ workerId ] );
};

//Esta funcion se esta utilizando en el Model de Construction, no tiene ruta workers.
const selectByConstruction = ( constructionId ) => {
    return db.query('SELECT * FROM users where Constructions_id = ?', [constructionId]);
};

module.exports = {
    selectAll,
    selectWorkerById,
    insertNewWorker,
    updateWorkerById,
    deleteWorkerById,
    selectByConstruction
    
}