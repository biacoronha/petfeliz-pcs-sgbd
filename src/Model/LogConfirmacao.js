const mongoose = require("mongoose");

const LogConfirmacaoSchema = new mongoose.Schema(
  {
    idUsuario: {
      type: Number,
      required: true
    },
    nomeUsuario: {
      type: String,
      required: true
    },
    idEvento: {
      type: Number,
      required: true
    },
    nomeEvento: {
      type: String,
      required: true
    },
    operacao: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("LogConfirmacao", LogConfirmacaoSchema);