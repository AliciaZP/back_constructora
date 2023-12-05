

const selectUserByEmail = (email) => {
    return db.query('SELECT * FROM users WHERE email = ?', [email])
};


module.exports = {
    selectUserByEmail
}