const db = require("../db");

//create animal
exports.createAnimal = async (req, res) => {
  const { id_animal, nome_animal, raca_animal, idade_animal, tipo_animal, img_url } = req.body;
  try {
    const { rows } = await db.query(
      "INSERT INTO animal (id_animal, nome_animal, raca_animal, idade_animal, tipo_animal, img_url) VALUES ($1, $2, $3, $4, $5, $6)",
      [id_animal, nome_animal, raca_animal, idade_animal, tipo_animal, img_url]
    );
    res.status(201).send({
      message: "Animal added successfully!",
      body: {
        animal: { id_animal, nome_animal, raca_animal, idade_animal, tipo_animal, img_url },
      },
    });
  } catch (error) {
    console.error('createAnimal', error);
    res.status(500).send({
      message: "Ocorreu um erro."
    });
  }
};

//get all animais
exports.listAllAnimais = async (req, res) => {
    try {
      const { rows } = await db.query(`SELECT * FROM animal`);
      res.status(200).send(rows);
    } catch (error) {
      console.error('listAllAnimais', error);
      res.status(500).send({
        message: "Ocorreu um erro."
      });
    }
  };

//get one animal
exports.findAnimalById = async (req, res) => {
  const { id_animal } = req.params;
  try {
    const { rows } = await db.query(`SELECT * FROM animal WHERE id_animal = $1`,
      [id_animal]
    );
    if (!rows.length) {
      throw 'animal_not_found';
    }
    res.status(200).send(rows[0]);
  } catch (error) {
    console.error('findAnimalById', error);
    if (error == 'animal_not_found') {
      res.status(404).send({
        message: "Animal not found."
      });
    } else {
      res.status(500).send({
        message: "Ocorreu um erro."
      });
    }
  }
};

//update animal by id
exports.updateAnimalById = async (req, res) => {
  const { id_animal } = req.params;
  try {
    const { nome_animal, raca_animal, idade_animal, tipo_animal, img_url } = req.body;
    const { rows } = await db.query(`UPDATE animal 
                                    SET nome_animal = $1, 
                                    raca_animal = $2, 
                                    idade_animal = $3, 
                                    tipo_animal = $4,
                                    img_url = $5 
                                    WHERE id_animal = $6`,
      [nome_animal, raca_animal, idade_animal, tipo_animal, img_url, id_animal]
    );
    res.status(200).send({ message: "Animal Updated Successfully!" });
  } catch (error) {
    console.error('updateAnimalById', error);
    res.status(500).send({
      message: "Ocorreu um erro."
    });
  }
};

//delete animal by id
exports.deleteAnimalById = async (req, res) => {
  const { id_animal } = req.params;
  try {
    await db.query("DELETE FROM animal WHERE id_animal = $1", [id_animal]);
    res.status(200).send({ message: "Animal deleted successfully!" });
  } catch (error) {
    console.error('deleteAnimalById', error);
    res.status(500).send({
      message: "Ocorreu um erro."
    });
  }
};