const selectAdminById = (id) => {
    return db.query('select * from users where id = ?', [id])

}

const updateAdminById = (
    adminId,
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
    return db.query('update users set name = ?, surname = ?, dni = ?, phone = ?, email = ?, password = ?, role = ?, active = ?, job = ?, city = ?, Constructions_id = ?, image = ?, where id = ?', [
        name, surname, dni, phone, email, password, role, active, job, city, Constructions_id, image, adminId])
}

const createAdmin = (
    {
        name,
        surname,
        dni,
        phone,
        email,
        password,
        role = 'admin',
        active = true,
        job,
        city,
        Constructions_id,
        image
    }
) => {
    return db.query('insert into users (name, surname, dni, phone, email, password, role, active, job, city, Constructions_id, image) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [
        name, surname, dni, phone, email, password, role, active, job, city, Constructions_id, image])
}

const deleteAdminById = (adminId) => { return db.query('delete from users where id = ?', [adminId]) }

module.exports = {
    selectAdminById,
    updateAdminById,
    createAdmin,
    deleteAdminById
}