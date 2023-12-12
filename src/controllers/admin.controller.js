const bcrypt = require('bcryptjs')
const AdminModel = require('../model/admin.model')

const getAdminById = async (req, res) => {
    try {
        const { adminId } = req.params;
        const [result] = await AdminModel.selectAdminById(adminId);
        res.json(result[0])
    } catch (error) {
        res.json({ error: error.message })
    }
}

const updateAdminById = async (req, res) => {
    try {
        const { adminId } = req.params;
        const [result] = await AdminModel.updateAdminById(adminId, req.body);
        const [admin] = await AdminModel.selectAdminById(adminId);
        res.json(admin[0])

    } catch (error) {
        res.json({ error: error.message })
    }
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
    try {
        const { adminId } = req.params;
        const [result] = await AdminModel.selectAdminById(adminId);
        await AdminModel.deleteAdminById(adminId);
        res.json(result[0])
    } catch (error) {
        res.json({ error: error.message })
    }
}


module.exports = { getAdminById, updateAdminById, createAdminById, deleteAdminById }