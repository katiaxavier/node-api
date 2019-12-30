const express = require('express');
const mongoose = require('mongoose');

// Iniciando o App
const app = express();

// Iniciando o DB
mongoose.connect('mongodb://localhost:27020/nodeapi', {useNewUrlParser: true, useUnifiedTopology: true});

// Primeira rota
app.get('/', (req, res) =>{
    res.send("Hello Kátia");
});

app.listen(3001);