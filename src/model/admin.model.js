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
        city
    }
) => {
    return db.query('update users set name = ?, surname = ?, dni = ?, phone = ?, email = ?, password = ?, role = ?, active = ?, job = ?, city = ?', [
        name, surname, dni, phone, email, password, role, active, job, city])
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
        city
    }
) => {
    return db.query('insert into users (name, surname, dni, phone, email, password, role, active, job, city) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [
        name, surname, dni, phone, email, password, role, active, job, city])
}

module.exports = {
    selectAdminById,
    updateAdminById,
    createAdmin
}