const bcrypt = require('bcryptjs');

const UserModel = require('../model/user.model')
const { createToken } = require('../helpers/utils');

const userLogin = async (req, res) => {
    const { email, password } = req.body;
    

    try {
        const [user] = await UserModel.selectUserByEmail( email );
        
        
        if( !user ) return res.json({ error: 'Error en usuario y/o contraseña'});
        const samePass = bcrypt.compareSync( password, user[0].password );
        if( !samePass ) return res.json({ error: 'Contraseña incorrecta' });
        console.log( user[0].role )
        
        res.json({
            success: 'Login correcto', 
            token:  createToken( user[0] ) 
        })
    } catch (error) {
        res.json({ error: error.message });
    }
};

const getAllUsers = async (req, res) => {
    try {
        const [ result ] = UserModel.selectUser();
        res.json(result[0])
    } catch (error) {
        res.json({ error: error.message });
    }
};


module.exports = {
    userLogin,
    getAllUsers
}