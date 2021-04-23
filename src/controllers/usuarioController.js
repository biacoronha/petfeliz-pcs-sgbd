const db = require("../db");

//create usuario
exports.createUsuario = async (req, res) => {
  const { nome_abrigo, email_usuario, foto_url } = req.body;
  try {
    const { rows } = await db.query(
      "INSERT INTO usuario (nome_abrigo, email_usuario, foto_url) VALUES ($1, $2, $3)",
      [nome_abrigo, email_usuario, foto_url]
    );
    res.status(201).send({
      message: "Usuario added successfully!",
      body: {
        usuario: { nome_abrigo, email_usuario, foto_url },
      },
    });
  } catch (error) {
    console.error('createUsuario', error);
    res.status(500).send({
      message: "Ocorreu um erro."
    });
  }
};

//get all usuarios
exports.listAllUsuarios = async (req, res) => {
    try {
      const { rows } = await db.query(`SELECT * FROM usuario`);
      res.status(200).send(rows);
    } catch (error) {
      console.error('listAllUsuarios', error);
      res.status(500).send({
        message: "Ocorreu um erro."
      });
    }
  };

//get one usuario by id
exports.findUsuarioById = async (req, res) => {
  const { id } = req.params;
  try {
    const { rows } = await db.query(`SELECT * FROM usuario WHERE id_usuario = $1`,
      [id]
    );
    if (!rows.length) {
      throw 'usuario_not_found';
    }
    res.status(200).send(rows[0]);
  } catch (error) {
    console.error('findUsuarioById', error);
    if (error == 'usuario_not_found') {
      res.status(404).send({
        message: "Usuario not found."
      });
    } else {
      res.status(500).send({
        message: "Ocorreu um erro."
      });
    }
  }
};

//update usuario by id
exports.updateUsuarioById = async (req, res) => {
  const { id } = req.params;
  try {
    const { nome_abrigo, email_usuario, foto_url } = req.body;
    const { rows } = await db.query(`UPDATE usuario 
                                    SET nome_abrigo = $1, 
                                    email_usuario = $2, 
                                    foto_url = $3, 
                                    WHERE id_usuario = $4`,
      [nome_abrigo, email_usuario, foto_url, id]
    );
    res.status(200).send({ message: "Usuario Updated Successfully!" });
  } catch (error) {
    console.error('updateUsuarioById', error);
    res.status(500).send({
      message: "Ocorreu um erro."
    });
  }
};

//delete usuario by id
exports.deleteUsuarioById = async (req, res) => {
  const { id } = req.params;
  try {
    await db.query("DELETE FROM usuario WHERE id_usuario = $1", [id]);
    res.status(200).send({ message: "Usuario deleted successfully!" });
  } catch (error) {
    console.error('deleteUsuarioById', error);
    res.status(500).send({
      message: "Ocorreu um erro."
    });
  }
};