const db = require("../db");
const LogVotoEvento = require("../Model/LogVotoEvento");

//create votoEvento
exports.createVotoEvento = async (req, res) => {
  const { id_usuario , id_evento, nota } = req.body;
  try {
    const { rows } = await db.query(
      "INSERT INTO voto_evento (id_usuario , id_evento, nota) VALUES ($1, $2, $3)",
      [id_usuario , id_evento, nota]
    );
    res.status(201).send({
      message: "VotoEvento added successfully!",
      body: {
        votoEvento: { id_usuario , id_evento, nota },
      },
    });
  } catch (error) {
    console.error('createVotoEvento', error);
    res.status(500).send({
      message: "Ocorreu um erro."
    });
  }
};

//get all votoEvento
exports.listAllVotosEvento = async (req, res) => {
    try {
      const { rows } = await db.query(`SELECT * FROM voto_evento`);
      res.status(200).send(rows);
    } catch (error) {
      console.error('listAllVotosEvento', error);
      res.status(500).send({
        message: "Ocorreu um erro."
      });
    }
  };

//get one votoEvento by id
exports.findVotoEventoById = async (req, res) => {
  const { id_usuario } = req.params;
  try {
    const { rows } = await db.query(`SELECT * FROM voto_evento WHERE id_usuario = $1`,
      [id_usuario]
    );
    if (!rows.length) {
      throw 'votoEvento_not_found';
    }
    res.status(200).send(rows[0]);
  } catch (error) {
    console.error('findVotoEventoById', error);
    if (error == 'votoEvento_not_found') {
      res.status(404).send({
        message: "VotoEvento not found."
      });
    } else {
      res.status(500).send({
        message: "Ocorreu um erro."
      });
    }
  }
};

//delete votoEvento by id
exports.deleteVotoEventoById = async (req, res) => {
  const { id_usuario , id_Evento } = req.params;
  try {
    await db.query("DELETE FROM voto_evento WHERE id_usuario = $1, id_evento = $2", [id_usuario , id_Evento]);
    res.status(200).send({ message: "VotoEvento deleted successfully!" });
  } catch (error) {
    console.error('deleteVotoEventoById', error);
    res.status(500).send({
      message: "Ocorreu um erro."
    });
  }
};

//Salvar log de Voto no Evento
exports.store = async (req, res) => {
  const data = await LogVotoEvento.create(req.body);
  return res.json(data);
}

//get media
exports.getMedia = async (req, res) => {
  const { id_evento} = req.params;
  try {
    const { rows } = await db.query(
      "SELECT sum(nota)/count(nota) as media FROM voto_evento WHERE id_evento = $1",
      [ id_evento]
    );
    if (!rows.length) {
      throw 'getMedia_not_found';
    }
    res.status(200).send(rows[0]);
  } catch (error) {
    console.error('getMedia', error);
    res.status(500).send({
      message: "Ocorreu um erro."
    });
  }
};