
const selectAll = () => {
    return db.query('SELECT * FROM users where role = "worker"');
};
const selectWorkerById = ( id ) => {
    return db.query('SELECT * FROM users where id = ?', [id]);
};
const selectMailByWorker = ( id ) => {
    return db.query('SELECT email FROM users where id = ?', [id]);
};

const selectWorkerBySurname = ( surname ) => {
    return db.query(`SELECT * FROM users order by surname ${surname}`);
};



const selectWorkerByActive = ( active ) => {
    return db.query(`SELECT * FROM users where active = ?`, [active]);
};
const selectWorkerByCity = ( city ) => {
    return db.query(`SELECT * FROM users where city = ?`, [city]);
};
const selectWorkerByJob = ( job ) => {
    return db.query(`SELECT * FROM users where job = ?`, [job]);
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
        role,
        active,
        job,
        city,
        Constructions_id,
        image
    }
    ) => {
        return db.query( 'update users set name = ?, surname = ?, dni = ?, phone = ?, email = ?, role = ?, active = ?, job = ?, city = ?, Constructions_id = ?, image = ?  where id = ?',
        [ name, surname, dni, phone, email,role, active, job, city, Constructions_id, image,  workerId ]
        )
};

const assignConstructionToWorker = (
    workerId,
    {   
        active,
        Constructions_id
    }
)=> {
    return db.query('update users set active = ?, Constructions_id = ? where id = ?', [ active ,Constructions_id, workerId ]);
}


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
    selectByConstruction,
    selectWorkerBySurname,
    selectWorkerByCity,
    selectWorkerByJob,
    assignConstructionToWorker,
    selectWorkerByActive,
    selectMailByWorker
    
}