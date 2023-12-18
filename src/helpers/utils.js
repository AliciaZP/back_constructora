


const dayjs = require('dayjs');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const { email } = require('../config/config')



const createToken = ( user ) => {
    const payload = {
        user_id: user.id,
        user_role: user.role,
    }

    return jwt.sign( payload, process.env.SECRET_KEY )
}


const transporter = nodemailer.createTransport({
    service: email.service,
    auth: {
        user: email.user,
        pass: email.pass
    }
});

// hucf ygwx tfqj vfrn




// transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//         return console.error(error);
//     }
//     console.log('Correo electrónico enviado:', info.response);
// });

module.exports = {
    createToken,
    transporter
}