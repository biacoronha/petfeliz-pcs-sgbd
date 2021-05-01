const router = require('express-promise-router')();
const eventoController = require('../controllers/eventoController');

// ==> Definindo as rotas do CRUD - 'Evento'

// ==> Rota responsável por criar um novo 'Evento': (POST): localhost:3000/api/evento
router.post('/evento', eventoController.createEvento);

// ==> Rota responsável por listar todos os 'Evento': (GET): localhost:3000/api/evento
router.get('/evento', eventoController.listAllEventos);

// ==> Rota responsável por listar um determinado 'Evento' por Id: (GET): localhost:3000/api/evento/:id
router.get('/evento/:id_evento', eventoController.findEventoById)

// ==> Rota reponsável por atualizar um determinado 'Evento por Id: (PUT): localhost:3000/api/evento/:id_evento
router.put('/evento/:id_evento', eventoController.updateEventoById)

// ==> Rota responsável por deletar/excluir um determinado 'Evento por Id: localhost:3000/api/evento/:id_evento
router.delete('/evento/:id_evento', eventoController.deleteEventoById);

module.exports = router;