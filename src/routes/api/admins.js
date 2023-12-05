const router = require('express').Router();
const AdminController = require('../../controllers/admin.controller')
// Ruta para obtener todos los administradores
router.post('/:new', AdminController.createAdminById)
router.get('/:adminId', AdminController.getAdminById)


router.put('/:adminId', AdminController.updateAdminById)
router.delete('/:adminId', AdminController.deleteAdminById)

// Ruta para obtener un administrador por ID
// router.get('/:id', (req, res) => {
//     const adminId = req.params.id;
//     // Lógica para obtener y devolver el administrador con el ID proporcionado
//     res.send(`Obtener administrador con ID ${adminId}`);
// });


// Otras rutas y lógica para los administradores

module.exports = router;

// - GET api / admin /: adminId
// - PUT api / admin /: adminId
// - POST api / admin / new
// - DELETE api / admin /: adminId