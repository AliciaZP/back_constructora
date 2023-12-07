

const selectUserByEmail = (email) => {
    return db.query('SELECT * FROM users WHERE email = ?', [email])
};

const selectUser = ( userId ) => {
    return db.query('SELECT * FROM users WHERE id = ?', [userId]);
}


module.exports = {
    selectUserByEmail,
    selectUser
}