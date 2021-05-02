const db = require("../db");

//create abrigo
exports.createAbrigo = async (req, res) => {
  const { id_abrigo, nome_abrigo, email_abrigo, telefone_abrigo, endereco_abrigo, nota } = req.body;
  try {
    const { rows } = await db.query(
      "INSERT INTO abrigo (id_abrigo, nome_abrigo, email_abrigo, telefone_abrigo, endereco_abrigo, nota_media) VALUES ($1, $2, $3, $4, $5, $6 )",
      [id_abrigo, nome_abrigo, email_abrigo, telefone_abrigo, endereco_abrigo, nota]
    );
    res.status(201).send({
      message: "Abrigo added successfully!",
      body: {
        abrigo: { id_abrigo, nome_abrigo, email_abrigo, telefone_abrigo, endereco_abrigo, nota },
      },
    });
  } catch (error) {
    console.error('createAbrigo', error);
    res.status(500).send({
      message: "Ocorreu um erro."
    });
  }
};

//get all abrigos
exports.listAllAbrigos = async (req, res) => {
    try {
      const { rows } = await db.query(`SELECT * FROM abrigo`);
      res.status(200).send(rows);
    } catch (error) {
      console.error('listAllAbrigos', error);
      res.status(500).send({
        message: "Ocorreu um erro."
      });
    }
  };

//get one abrigo
exports.findAbrigoById = async (req, res) => {
  const { id_abrigo } = req.params;
  try {
    const { rows } = await db.query(`SELECT * FROM abrigo WHERE id_abrigo = $1`,
      [id_abrigo]
    );
    if (!rows.length) {
      throw 'abrigo_not_found';
    }
    res.status(200).send(rows[0]);
  } catch (error) {
    console.error('findAbrigoById', error);
    if (error == 'abrigo_not_found') {
      res.status(404).send({
        message: "Abrigo not found."
      });
    } else {
      res.status(500).send({
        message: "Ocorreu um erro."
      });
    }
  }
};

//update abrigo by id
exports.updateAbrigoById = async (req, res) => {
  const { id_abrigo } = req.params;
  try {
    const { nome_abrigo, email_abrigo, telefone_abrigo, endereco_abrigo, nota_media } = req.body;
    const { rows } = await db.query(`UPDATE abrigo 
                                    SET nome_abrigo = $1, 
                                    email_abrigo = $2, 
                                    telefone_abrigo = $3, 
                                    endereco_abrigo = $4, 
                                    nota_media = $5
                                    WHERE id_abrigo = $6`,
      [nome_abrigo, email_abrigo, telefone_abrigo, endereco_abrigo, nota_media, id_abrigo]
    );
    res.status(200).send({ message: "Abrigo Updated Successfully!" });
  } catch (error) {
    console.error('updateAbrigoById', error);
    res.status(500).send({
      message: "Ocorreu um erro."
    });
  }
};

//delete abrigo by id
exports.deleteAbrigoById = async (req, res) => {
  const { id_abrigo } = req.params;
  try {
    await db.query("DELETE FROM abrigo WHERE id_abrigo = $1", [id_abrigo]);
    res.status(200).send({ message: "Abrigo deleted successfully!" });
  } catch (error) {
    console.error('deleteAbrigoById', error);
    res.status(500).send({
      message: "Ocorreu um erro."
    });
  }
};