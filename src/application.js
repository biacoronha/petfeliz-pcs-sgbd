const express = require('express');
const cors = require('cors');

const app = express();

// ==> Rotas da API (Abrigo):
const index = require('./routes/index');
const abrigoAnimalRoutes = require('./routes/abrigoAnimalRoutes');
const abrigoRoutes = require('./routes/abrigoRoutes');
const animalRoutes = require('./routes/animalRoutes');
const confirmacaoEventoRoutes = require('./routes/confirmacaoEventoRoutes');
const eventoRoutes = require('./routes/eventoRoutes');
const seguidorRoutes = require('./routes/seguidorRoutes');
const usuarioRoutes = require('./routes/usuarioRoutes');
const votoAbrigoRoutes = require('./routes/votoAbrigoRoutes');
const votoEventoRoutes = require('./routes/votoEventoRoutes');
const HamburguerRoutes = require('./routes/HamburguerRoutes')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cors());

app.use(index);
app.use('/api/', abrigoAnimalRoutes);
app.use('/api/', abrigoRoutes);
app.use('/api/', animalRoutes);
app.use('/api/', confirmacaoEventoRoutes);
app.use('/api/', eventoRoutes);
app.use('/api/', seguidorRoutes);
app.use('/api/', usuarioRoutes);
app.use('/api/', votoAbrigoRoutes);
app.use('/api/', votoEventoRoutes);
app.use('/api/', HamburguerRoutes);

module.exports = app;