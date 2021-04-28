const mongoose = require("mongoose");

const LogVotoAbrigoSchema = new mongoose.Schema(
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
    nota: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("LogVotoAbrigo", LogVotoAbrigoSchema);