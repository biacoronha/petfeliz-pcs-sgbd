const db = require("../db");

//create votoAbrigo
exports.createVotoAbrigo = async (req, res) => {
  const { id_usuario , id_abrigo, nota } = req.body;
  try {
    const { rows } = await db.query(
      "INSERT INTO voto_abrigo (id_usuario , id_abrigo, nota) VALUES ($1, $2, $3)",
      [id_usuario , id_abrigo]
    );
    res.status(201).send({
      message: "VotoAbrigo added successfully!",
      body: {
        votoAbrigo: { id_usuario , id_abrigo, nota },
      },
    });
  } catch (error) {
    console.error('createVotoAbrigo', error);
    res.status(500).send({
      message: "Ocorreu um erro."
    });
  }
};

//get all votoAbrigo
exports.listAllVotosAbrigo = async (req, res) => {
    try {
      const { rows } = await db.query(`SELECT * FROM voto_abrigo`);
      res.status(200).send(rows);
    } catch (error) {
      console.error('listAllVotosAbrigo', error);
      res.status(500).send({
        message: "Ocorreu um erro."
      });
    }
  };

//get one votoAbrigo by id
exports.findVotoAbrigoById = async (req, res) => {
  const { id } = req.params;
  try {
    const { rows } = await db.query(`SELECT * FROM voto_abrigo WHERE id_abrigo = $1`,
      [id]
    );
    if (!rows.length) {
      throw 'votoAbrigo_not_found';
    }
    res.status(200).send(rows[0]);
  } catch (error) {
    console.error('findVotoAbrigoById', error);
    if (error == 'votoAbrigo_not_found') {
      res.status(404).send({
        message: "VotoAbrigo not found."
      });
    } else {
      res.status(500).send({
        message: "Ocorreu um erro."
      });
    }
  }
};

//delete votoAbrigo by id
exports.deleteVotoAbrigoById = async (req, res) => {
  const { id_usuario , id_abrigo } = req.params;
  try {
    await db.query("DELETE FROM voto_abrigo WHERE id_usuario = $1, id_abrigo = $2", [id_usuario , id_abrigo]);
    res.status(200).send({ message: "VotoAbrigo deleted successfully!" });
  } catch (error) {
    console.error('deleteVotoAbrigoById', error);
    res.status(500).send({
      message: "Ocorreu um erro."
    });
  }
};