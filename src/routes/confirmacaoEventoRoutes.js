const router = require('express-promise-router')();
const confirmacaoEventoController = require('../controllers/confirmacaoEventoController');

// ==> Definindo as rotas do CRUD - 'ConfirmacaoEvento'

// ==> Rota responsável por criar um novo 'ConfirmacaoEvento': (POST): localhost:3000/api/confirmacaoEvento
router.post('/confirmacaoEvento', confirmacaoEventoController.createConfirmacaoEvento);

// ==> Rota responsável por listar todos os 'ConfirmacaoEventos': (GET): localhost:3000/api/confirmacaoEvento
router.get('/confirmacaoEvento', confirmacaoEventoController.listAllConfirmacaoEventos);

// ==> Rota responsável por listar um determinado 'ConfirmacaoEvento' por Id: (GET): localhost:3000/api/confirmacaoEvento/:id
router.get('/confirmacaoEvento/:id_usuario/:id_evento', confirmacaoEventoController.findConfirmacaoEventosById)

// ==> Rota responsável por deletar/excluir um determinado 'ConfirmacaoEvento por Id: localhost:3000/api/confirmacaoEvento
router.delete('/confirmacaoEvento/:id_usuario/:id_evento', confirmacaoEventoController.deleteConfirmacaoEvento);

// ==> Rota responsável por guardar em um Log as votações de Evento realizadas
router.post("/confirmacaoEventoLog", confirmacaoEventoController.store);

module.exports = router;