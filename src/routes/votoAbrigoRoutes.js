const router = require('express-promise-router')();
const votoAbrigoController = require('../controllers/votoAbrigoController');

// ==> Definindo as rotas do CRUD - 'VotoAbrigo'

// ==> Rota responsável por criar um novo 'VotoAbrigo': (POST): localhost:3000/api/votoAbrigo
router.post('/votoAbrigo', votoAbrigoController.createVotoAbrigo);

// ==> Rota responsável por listar todos os 'VotoAbrigo': (GET): localhost:3000/api/votoAbrigo
router.get('/votoAbrigo', votoAbrigoController.listAllVotosAbrigo);

// ==> Rota responsável por listar um determinado 'VotoAbrigo' por Id: (GET): localhost:3000/api/votoAbrigo/:id
router.get('/votoAbrigo/:id', votoAbrigoController.findVotoAbrigoById)

// ==> Rota responsável por deletar/excluir um determinado 'VotoAbrigo por Id: localhost:3000/api/votoAbrigo/:id
router.delete('/votoAbrigo/:id', votoAbrigoController.deleteVotoAbrigoById);

module.exports = router;