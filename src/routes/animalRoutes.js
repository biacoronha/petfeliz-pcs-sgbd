const router = require('express-promise-router')();
const animalController = require('../controllers/animalController');

// ==> Definindo as rotas do CRUD - 'Animal'

// ==> Rota responsável por criar um novo 'Animal': (POST): localhost:3000/api/animal
router.post('/animal', animalController.createAnimal);

// ==> Rota responsável por listar todos os 'Animais': (GET): localhost:3000/api/animal
router.get('/animal', animalController.listAllAnimais);

// ==> Rota responsável por listar um determinado 'Animal' por Id: (GET): localhost:3000/api/animal/:id
router.get('/animal/:id_animal', animalController.findAnimalById)

// ==> Rota responsável por listar todos os 'Animal' tipo: (GET): localhost:3000/api/animal/byTipo/id/tipo
router.get('/animal/byTipo/:id_abrigo/:tipo_animal', animalController.findAnimalByTipo)

// ==> Rota reponsável por atualizar um determinado 'Animal por Id: (PUT): localhost:3000/api/animal/:id
router.put('/animal/:id_animal', animalController.updateAnimalById)

// ==> Rota responsável por deletar/excluir um determinado 'Animal por Id: localhost:3000/api/animal/:id
router.delete('/animal/:id_animal', animalController.deleteAnimalById);

module.exports = router;