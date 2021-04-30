const router = require('express-promise-router')();
const abrigoController = require('../controllers/abrigoController');
const VotoAbrigoController = require('../controllers/votoAbrigoController');

// ==> Definindo as rotas do CRUD - 'Abrigo'

// ==> Rota responsável por criar um novo 'Abrigo': (POST): localhost:3000/api/abrigo
router.post('/abrigo', abrigoController.createAbrigo);

// ==> Rota responsável por listar todos os 'Abrigos': (GET): localhost:3000/api/abrigo
router.get('/abrigo', abrigoController.listAllAbrigos);

// ==> Rota responsável por listar um determinado 'Abrigo' por Id: (GET): localhost:3000/api/abrigo/:id
router.get('/abrigo/:id_abrigo', abrigoController.findAbrigoById)

// ==> Rota reponsável por atualizar um determinado 'Abrigo por Id: (PUT): localhost:3000/api/abrigo/:id
router.put('/abrigo/:id_abrigo', abrigoController.updateAbrigoById)

// ==> Rota responsável por deletar/excluir um determinado 'Abrigo por Id: localhost:3000/api/abrigo/:id
router.delete('/abrigo/:id_abrigo', abrigoController.deleteAbrigoById);

router.post("/votoAbrigoLog", VotoAbrigoController.store);

module.exports = router;