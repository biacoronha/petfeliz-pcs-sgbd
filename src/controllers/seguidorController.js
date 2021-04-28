const db = require("../db");

//create seguidor
exports.createSeguidor = async (req, res) => {
  const { id_usuario , id_abrigo } = req.body;
  try {
    const { rows } = await db.query(
      "INSERT INTO seguidor (id_usuario , id_abrigo) VALUES ($1, $2)",
      [id_usuario , id_abrigo]
    );
    res.status(201).send({
      message: "Seguidor added successfully!",
      body: {
        seguidor: { id_usuario , id_abrigo },
      },
    });
  } catch (error) {
    console.error('createSeguidor', error);
    res.status(500).send({
      message: "Ocorreu um erro."
    });
  }
};

//get all seguidores
exports.listAllSeguidores = async (req, res) => {
    try {
      const { rows } = await db.query(`SELECT * FROM seguidor`);
      res.status(200).send(rows);
    } catch (error) {
      console.error('listAllSeguidores', error);
      res.status(500).send({
        message: "Ocorreu um erro."
      });
    }
  };

//get one seguidor by id
exports.findSeguidorById = async (req, res) => {
  const { id_usuario, id_abrigo } = req.params;
  try {
    const { rows } = await db.query(`SELECT * FROM seguidor WHERE id_usuario = $1 and id_abrigo = $2`,
      [id_usuario, id_abrigo]
    );
    if (!rows.length) {
      throw 'seguidor_not_found';
    }
    res.status(200).send(rows[0]);
  } catch (error) {
    console.error('findSeguidorById', error);
    if (error == 'seguidor_not_found') {
      res.status(404).send({
        message: "Seguidor not found."
      });
    } else {
      res.status(500).send({
        message: "Ocorreu um erro."
      });
    }
  }
};

//delete seguidor by id
exports.deleteSeguidorById = async (req, res) => {
  const { id_usuario , id_abrigo } = req.params;
  try {
    await db.query("DELETE FROM seguidor WHERE id_usuario = $1, id_abrigo = $2", [id_usuario , id_abrigo]);
    res.status(200).send({ message: "Seguidor deleted successfully!" });
  } catch (error) {
    console.error('deleteSeguidorById', error);
    res.status(500).send({
      message: "Ocorreu um erro."
    });
  }
};