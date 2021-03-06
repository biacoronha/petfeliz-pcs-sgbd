const db = require("../db");
const LogConfirmacao = require("../model/LogConfirmacao")

//create confirmacaoEvento
exports.createConfirmacaoEvento = async (req, res) => {
  const { id_usuario , id_evento } = req.body;
  try {
    const { rows } = await db.query(
      "INSERT INTO confirmacao_evento (id_usuario , id_evento) VALUES ($1, $2)",
      [id_usuario , id_evento]
    );
    res.status(201).send({
      message: "ConfirmacaoEvento added successfully!",
      body: {
        confirmacao_evento: { id_usuario , id_evento },
      },
    });
  } catch (error) {
    console.error('createConfirmacaoEvento', error);
    res.status(500).send({
      message: "Ocorreu um erro."
    });
  }
};

//get all confirmacaoEvento
exports.listAllConfirmacaoEventos = async (req, res) => {
    try {
      const { rows } = await db.query(`SELECT * FROM confirmacao_evento`);
      res.status(200).send(rows);
    } catch (error) {
      console.error('listAllConfirmacaoEventos', error);
      res.status(500).send({
        message: "Ocorreu um erro."
      });
    }
  };

//get one confirmacaoEvento by id
exports.findConfirmacaoEventosById = async (req, res) => {
  const { id_evento } = req.params;
  try {
    const { rows } = await db.query(`SELECT * FROM confirmacao_evento WHERE id_evento = $1`,
      [id_evento]
    );
    if (!rows.length) {
      throw 'confirmacaoEvento_not_found';
    }
    res.status(200).send(rows);
  } catch (error) {
    console.error('findConfirmacaoEventosById', error);
    if (error == 'confirmacaoEvento_not_found') {
      res.status(404).send({
        message: "ConfirmacaoEvento not found."
      });
    } else {
      res.status(500).send({
        message: "Ocorreu um erro."
      });
    }
  }
};

exports.findConfirmacaoEventosByUserId = async (req, res) => {
  const { id_usuario, id_evento } = req.params;
  try {
    const { rows } = await db.query(`SELECT * FROM confirmacao_evento WHERE id_usuario = $1 AND id_evento = $2`,
      [id_usuario, id_evento]
    );
    if (!rows.length) {
      throw 'confirmacaoEvento_not_found';
    }
    res.status(200).send(rows);
  } catch (error) {
    console.error('findConfirmacaoEventosByUserId', error);
    if (error == 'confirmacaoEvento_not_found') {
      res.status(404).send({
        message: "ConfirmacaoEvento not found."
      });
    } else {
      res.status(500).send({
        message: "Ocorreu um erro."
      });
    }
  }
};

//Salvar log de Confirma????es
exports.store = async (req, res) => {
  const data = await LogConfirmacao.create(req.body);
  return res.json(data);
}

//delete confirmacaoEvento by idusuario + idevento 
exports.deleteConfirmacaoEvento = async (req, res) => {
  const { id_usuario , id_evento } = req.params;
  try {
    await db.query("DELETE FROM confirmacao_evento WHERE id_usuario = $1 AND id_evento = $2", [id_usuario , id_evento]);
    res.status(200).send({ message: id_usuario + " " + id_evento});
  } catch (error) {
    console.error('deleteConfirmacaoEventoById', error);
    res.status(500).send({
      message: "Ocorreu um erro."
    });
  }
};