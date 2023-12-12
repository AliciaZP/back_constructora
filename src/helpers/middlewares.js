const jwt = require('jsonwebtoken');

const UserModel = require('../model/user.model')

const checkToken = async (req, res, next) => {
    if(!req.headers['authorization']){
        return res.json({ error: 'Necesitas la cabecera de autorizacion' })
    }

    const token = req.headers['authorization'];

    let payload;
    try {
        payload = jwt.verify(token, process.env.SECRET_KEY );
    } catch (error) {
        return res.json({ error: error.message})
    }

    const [ result ] = await UserModel.selectUserById(payload.user_id);
    req.user = result[0];

    

    next();
};



//Middleware que compruebe si el usuario tiene el rol admin (checkAdmin)
const checkAdmin = (req, res ,next) => {
    console.log('Estoy aqui')
    if( req.user.role !== 'admin' ){
        return res.json({ error: 'El rol del usuario no es el correcto'})
    }
    console.log('Pase por el if');
    next();
};


module.exports = {
    checkToken,
    checkAdmin
}