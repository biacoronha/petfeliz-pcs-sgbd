const mongoose = require("mongoose");

const LogSeguidorSchema = new mongoose.Schema(
  {
    idUsuario: {
      type: Number,
      required: true
    },
    nomeUsuario: {
      type: String,
      required: true
    },
    idAbrigo: {
      type: Number,
      required: true
    },
    nomeAbrigo: {
      type: String,
      required: true
    },
    operacao: {
      type: String,
      required: true
    }
  }
);

module.exports = mongoose.model("LogSeguidor", LogSeguidorSchema);