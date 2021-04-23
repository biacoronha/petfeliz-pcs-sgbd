const router = require('express-promise-router')();
const votoEventoController = require('../controllers/votoEventoController');

// ==> Definindo as rotas do CRUD - 'VotoEvento'

// ==> Rota responsável por criar um novo 'VotoEvento': (POST): localhost:3000/api/votoEvento
router.post('/votoEvento', votoEventoController.createVotoEvento);

// ==> Rota responsável por listar todos os 'VotoEvento': (GET): localhost:3000/api/votoEvento
router.get('/votoEvento', votoEventoController.listAllVotosEvento);

// ==> Rota responsável por listar um determinado 'VotoEvento' por Id: (GET): localhost:3000/api/votoEvento/:id
router.get('/votoEvento/:id', votoEventoController.findVotoEventoById)

// ==> Rota responsável por deletar/excluir um determinado 'VotoEvento por Id: localhost:3000/api/votoEvento/:id
router.delete('/votoEvento/:id', votoEventoController.deleteVotoEventoById);

module.exports = router;