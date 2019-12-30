const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Iniciando o App
const app = express();

// Iniciando o DB
mongoose.connect('mongodb://localhost:27020/nodeapi', {useNewUrlParser: true, useUnifiedTopology: true});
requireDir('./src/models');

// Rotas
app.use('/api', require('./src/routes'));

app.listen(3001);