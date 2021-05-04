const router = require('express-promise-router')();
const votoEventoController = require('../controllers/votoEventoController');

// ==> Definindo as rotas do CRUD - 'VotoEvento'

// ==> Rota responsável por criar um novo 'VotoEvento': (POST): localhost:3000/api/votoEvento
router.post('/votoEvento', votoEventoController.createVotoEvento);

// ==> Rota responsável por listar todos os 'VotoEvento': (GET): localhost:3000/api/votoEvento
router.get('/votoEvento', votoEventoController.listAllVotosEvento);

// ==> Rota responsável por listar um determinado 'VotoEvento' por Id: (GET): localhost:3000/api/votoEvento/:id
router.get('/votoEvento/:id_usuario', votoEventoController.findVotoEventoById)

// ==> Rota responsável por deletar/excluir um determinado 'VotoEvento por Id: localhost:3000/api/votoEvento/:id
router.delete('/votoEvento/:id', votoEventoController.deleteVotoEventoById);

// ==> Rota responsável por retornar a media de um determinado evento: (GET): localhost:3000/api/votoEvento/media/:id_evento
router.get('/votoEvento/media/:id_evento', votoEventoController.getMedia);

// ==> Rota responsável por guardar em um Log as votações de Evento realizadas
router.post("/votoEventoLog", votoEventoController.store);

// ==> Rota responsável por listar um determinado 'VotoEvento' por Id: (GET): localhost:3000/api/votoEvento/:id
router.get('/votoEvento/:id_usuario/:id_evento', votoEventoController.findVotoEventoByIdEvento);

module.exports = router;