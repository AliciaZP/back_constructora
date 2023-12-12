
const selectAllConstructions = () => {
    return db.query('select * from constructions')
};

const selectConstructionById = ( constructionId ) => {
    return db.query('select * from constructions where id = ?', [ constructionId ])
};

const selectConstructionWithWorkers = () => {
    return db.query('select users.* , constructions.* from users join constructions on constrions.id   ')
};

const createNewConstruction = ({
    name,
    description,
    direction,
    assignment_date,
    deadline,
    phone,
    construction_type,
    work_time,
    lat,
    lng,
    city,
    image
}) => {
    return db.query('insert into constructions (name, description, direction, assignment_date, deadline, phone, construction_type, work_time, lat, lng, city, image) values (?,?,?,?,?,?,?,?,?,?, ?, ?)', [ name, description, direction, assignment_date, deadline, phone, construction_type, work_time, lat, lng, city, image ] );
};

const updateConstructionById = (
    constructionId,
    {
    name,
    description,
    direction,
    assignment_date,
    deadline,
    phone,
    construction_type,
    work_time,
    lat,
    lng,
    city,
    image
    }) => {
        return db.query('update constructions set name = ?, description = ?, direction = ?, assignment_date = ?, deadline = ?, phone = ?, construction_type = ?, work_time = ?, lat = ?, lng = ?, city = ?, image = ? where id = ?', [ name, description, direction, assignment_date, deadline, phone, construction_type, work_time, lat, lng, city, image, constructionId ])
    };

const deleteConstructionById = ( constructionId ) => {
    return db.query('delete from constructions where id = ?', [ constructionId ])
};



module.exports = {
    selectAllConstructions,
    selectConstructionById,
    createNewConstruction,
    updateConstructionById,
    deleteConstructionById
}