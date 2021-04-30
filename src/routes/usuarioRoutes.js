const router = require('express-promise-router')();
const usuarioController = require('../controllers/usuarioController');

// ==> Definindo as rotas do CRUD - 'Usuario'

// ==> Rota responsável por criar um novo 'Usuario': (POST): localhost:3000/api/usuario
router.post('/usuario', usuarioController.createUsuario);

// ==> Rota responsável por listar todos os 'Usuario': (GET): localhost:3000/api/usuario
router.get('/usuario', usuarioController.listAllUsuarios);

// ==> Rota responsável por listar um determinado 'Usuario' por Id: (GET): localhost:3000/api/usuario/:id
router.get('/usuario/:id_usuario', usuarioController.findUsuarioById)

// ==> Rota reponsável por atualizar um determinado 'Usuario por Id: (PUT): localhost:3000/api/usuario/:id
router.put('/usuario/:id', usuarioController.updateUsuarioById)

// ==> Rota responsável por deletar/excluir um determinado 'Usuario por Id: localhost:3000/api/usuario/:id
router.delete('/usuario/:id_usuario', usuarioController.deleteUsuarioById);

module.exports = router;