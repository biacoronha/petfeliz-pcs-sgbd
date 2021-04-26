const router = require('express-promise-router')();
const abrigoAnimalController = require('../controllers/abrigoAnimalController');

// ==> Definindo as rotas do CRUD - 'abrigoAnimal'

// ==> Rota responsável por criar um novo 'abrigoAnimal': (POST): localhost:3000/api/abrigoAnimal
router.post('/abrigoAnimal', abrigoAnimalController.createAbrigoAnimal);

// ==> Rota responsável por listar todos os 'abrigoAnimais': (GET): localhost:3000/api/abrigoAnimal
router.get('/abrigoAnimal', abrigoAnimalController.listAllAbrigoAnimais);

// ==> Rota responsável por listar todos os 'abrigoAnimal' por Id do abrigo: (GET): localhost:3000/api/abrigoAnimal/:id
router.get('/abrigoAnimal/:id_abrigo', abrigoAnimalController.findAbrigoAnimaisById)

// ==> Rota responsável por deletar/excluir um determinado 'abrigoAnimal' por Id: localhost:3000/api/abrigoAnimal/:id
router.delete('/abrigoAnimal/:id', abrigoAnimalController.deleteAbrigoAnimalById);

module.exports = router;