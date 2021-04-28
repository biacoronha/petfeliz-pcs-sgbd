const mongoose = require("mongoose");

const LogVotoEventoSchema = new mongoose.Schema(
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
    nota: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("LogVotoEvento", LogVotoEventoSchema);