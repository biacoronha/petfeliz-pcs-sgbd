const router = require('express-promise-router')();
const seguidorController = require('../controllers/seguidorController');

// ==> Definindo as rotas do CRUD - 'Seguidor'

// ==> Rota responsável por criar um novo 'Seguidor': (POST): localhost:3000/api/seguidor
router.post('/seguidor', seguidorController.createSeguidor);

// ==> Rota responsável por listar todos os 'Seguidor': (GET): localhost:3000/api/seguidor
router.get('/seguidor', seguidorController.listAllSeguidores);

// ==> Rota responsável por listar um determinado 'Seguidor' por Id: (GET): localhost:3000/api/seguidor/:id
router.get('/seguidor/:id', seguidorController.findSeguidorById)

// ==> Rota responsável por deletar/excluir um determinado 'Seguidor por Id: localhost:3000/api/seguidor/:id
router.delete('/seguidor/:id', seguidorController.deleteSeguidorById);

module.exports = router;