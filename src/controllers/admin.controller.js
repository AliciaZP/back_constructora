const bcrypt = require('bcryptjs')
const AdminModel = require('../model/admin.model')

const getAdminById = (req, res) => {
    res.end('funciona')
}

const updateAdminById = async (req, res) => {
    res.end('funciona')
}
const createAdminById = async (req, res) => {
    try {
        req.body.password = bcrypt.hashSync(req.body.password, 8);
        const [result] = await AdminModel.createAdmin(req.body);
        const [admin] = await AdminModel.selectAdminById(result.insertId);
        res.json(admin[0])
    } catch (error) {
        res.json({ error: error.message })
    }
}
const deleteAdminById = async (req, res) => {
    res.end('funciona')
}


module.exports = { getAdminById, updateAdminById, createAdminById, deleteAdminById }