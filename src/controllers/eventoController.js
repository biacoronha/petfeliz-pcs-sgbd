const db = require("../db");

//create evento
exports.createEvento = async (req, res) => {
  const { nome_evento, data_evento, descricao_evento, local_nome, local_lat, local_long, tipo_evento, nota_media, id_abrigo } = req.body;
  try {
    const { rows } = await db.query(
      "INSERT INTO evento (nome_evento, data_evento, descricao_evento, local_nome, local_lat, local_long, tipo_evento, nota_media, id_abrigo) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)",
      [nome_evento, data_evento, descricao_evento, local_nome, local_lat, local_long, tipo_evento, nota_media, id_abrigo]
    );
    res.status(201).send({
      message: "Evento added successfully!",
      body: {
        employee: { nome_evento, data_evento, descricao_evento, local_nome, local_lat, local_long, tipo_evento, nota_media, id_abrigo },
      },
    });
  } catch (error) {
    console.error('createEvento', error);
    res.status(500).send({
      message: "Ocorreu um erro."
    });
  }
};

//get all eventos
exports.listAllEventos = async (req, res) => {
    try {
      const { rows } = await db.query(`SELECT * FROM evento`);
      res.status(200).send(rows);
    } catch (error) {
      console.error('listAllEventos', error);
      res.status(500).send({
        message: "Ocorreu um erro."
      });
    }
  };

//get one evento by id
exports.findEventoById = async (req, res) => {
  const { id } = req.params;
  try {
    const { rows } = await db.query(`SELECT * FROM evento WHERE id_evento = $1`,
      [id]
    );
    if (!rows.length) {
      throw 'evento_not_found';
    }
    res.status(200).send(rows[0]);
  } catch (error) {
    console.error('findEventoById', error);
    if (error == 'evento_not_found') {
      res.status(404).send({
        message: "Evento not found."
      });
    } else {
      res.status(500).send({
        message: "Ocorreu um erro."
      });
    }
  }
};

//update evento by id
exports.updateEventoById = async (req, res) => {
  const { id } = req.params;
  try {
    const { nome_evento, data_evento, descricao_evento, local_nome, local_lat, local_long, tipo_evento, id_abrigo } = req.body;
    const { rows } = await db.query(`UPDATE evento 
                                    SET nome_evento = $1, 
                                    data_evento = $2, 
                                    descricao_evento = $3, 
                                    local_nome = $4,
                                    local_lat = $5, 
                                    local_long = $6, 
                                    tipo_evento = $7,
                                    id_abrigo = $8,
                                    WHERE id_animal = $9`,
      [nome_evento, data_evento, descricao_evento, local_nome, local_lat, local_long, tipo_evento, id_abrigo, id]
    );
    res.status(200).send({ message: "Evento Updated Successfully!" });
  } catch (error) {
    console.error('updateEventoById', error);
    res.status(500).send({
      message: "Ocorreu um erro."
    });
  }
};

//delete evento by id
exports.deleteEventoById = async (req, res) => {
  const { id } = req.params;
  try {
    await db.query("DELETE FROM evento WHERE id_evento = $1", [id]);
    res.status(200).send({ message: "Evento deleted successfully!" });
  } catch (error) {
    console.error('deleteEventoById', error);
    res.status(500).send({
      message: "Ocorreu um erro."
    });
  }
};