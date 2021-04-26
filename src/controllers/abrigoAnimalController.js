const db = require("../db");

//create abrigoAnimal
exports.createAbrigoAnimal = async (req, res) => {
  const { id_animal , id_abrigo } = req.body;
  try {
    const { rows } = await db.query(
      "INSERT INTO abrigo_animal (id_animal , id_abrigo) VALUES ($1, $2)",
      [id_animal , id_abrigo]
    );
    res.status(201).send({
      message: "AbrigoAnimal added successfully!",
      body: {
        abrigoAnimal: { id_animal , id_abrigo },
      },
    });
  } catch (error) {
    console.error('createAbrigoAnimal', error);
    res.status(500).send({
      message: "Ocorreu um erro."
    });
  }
};

//get all abrigoAnimais
exports.listAllAbrigoAnimais = async (req, res) => {
    try {
      const { rows } = await db.query(`SELECT * FROM abrigo_animal`);
      res.status(200).send(rows);
    } catch (error) {
      console.error('listAllAbrigoAnimais', error);
      res.status(500).send({
        message: "Ocorreu um erro."
      });
    }
  };

//get abrigoAnimais by id abrigo
exports.findAbrigoAnimaisById = async (req, res) => {
  const { id_abrigo } = req.params;
  try {
    const { rows } = await db.query(`SELECT * FROM abrigo_animal WHERE id_abrigo = $1`,
      [id_abrigo]
    );
    if (!rows.length) {
      throw 'abrigoAnimais_not_found';
    }
    res.status(200).send(rows);
  } catch (error) {
    console.error('findAbrigoAnimaisById', error);
    if (error == 'abrigoAnimais_not_found') {
      res.status(404).send({
        message: "AbrigoAnimais not found."
      });
    } else {
      res.status(500).send({
        message: "Ocorreu um erro."
      });
    }
  }
};

//delete abrigoAnimal by id
exports.deleteAbrigoAnimalById = async (req, res) => {
  const { id_animal, id_abrigo } = req.params;
  try {
    await db.query("DELETE FROM abrigo_animal WHERE id_animal = $1, id_abrigo = $2", [id_animal, id_abrigo]);
    res.status(200).send({ message: "AbrigoAnimal deleted successfully!" });
  } catch (error) {
    console.error('deleteEventoById', error);
    res.status(500).send({
      message: "Ocorreu um erro."
    });
  }
};