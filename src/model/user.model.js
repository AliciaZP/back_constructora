

const selectUserByEmail = (email) => {
    return db.query('SELECT * FROM users WHERE email = ?', [email])
};

const selectUserById = ( userId ) => {
    return db.query('SELECT * FROM users WHERE id = ?', [userId]);
}

const selectAllUsers = () => {
    return db.query('SELECT * FROM users');
};


module.exports = {
    selectUserByEmail,
    selectUserById,
    selectAllUsers
}