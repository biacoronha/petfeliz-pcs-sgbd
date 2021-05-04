const router = require('express-promise-router')();
const votoAbrigoController = require('../controllers/votoAbrigoController');

// ==> Definindo as rotas do CRUD - 'VotoAbrigo'

// ==> Rota responsável por criar um novo 'VotoAbrigo': (POST): localhost:3000/api/votoAbrigo
router.post('/votoAbrigo', votoAbrigoController.createVotoAbrigo);

// ==> Rota responsável por listar todos os 'VotoAbrigo': (GET): localhost:3000/api/votoAbrigo
router.get('/votoAbrigo', votoAbrigoController.listAllVotosAbrigo);

// ==> Rota responsável por listar um determinado 'VotoAbrigo' por Id: (GET): localhost:3000/api/votoAbrigo/:id
router.get('/votoAbrigo/:id_usuario', votoAbrigoController.findVotoAbrigoById)

// ==> Rota responsável por deletar/excluir um determinado 'VotoAbrigo por Id: localhost:3000/api/votoAbrigo/:id
router.delete('/votoAbrigo/:id', votoAbrigoController.deleteVotoAbrigoById);

// ==> Rota responsável por retornar a media de um determinado abrigo: (GET): localhost:3000/api/votoAbrigo/media/:id_abrigo
router.get('/votoAbrigo/media/:id_abrigo', votoAbrigoController.getMedia);

// ==> Rota responsável por guardar em um Log as votações de Abrigo realizadas
router.post("/votoAbrigoLog", votoAbrigoController.store);

// ==> Rota responsável por listar um determinado 'VotoAbrigo' por Id: (GET): localhost:3000/api/votoAbrigo/:id
router.get('/votoAbrigo/:id_usuario/:id_abrigo', votoAbrigoController.findVotoAbrigoByIdAbrigo)

module.exports = router;