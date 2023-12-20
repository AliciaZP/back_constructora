


const dayjs = require('dayjs');
const jwt = require('jsonwebtoken');




const createToken = ( user ) => {
    const payload = {
        user_id: user.id,
        user_role: user.role,
    }

    return jwt.sign( payload, process.env.SECRET_KEY )
}




module.exports = {
    createToken,
    
}