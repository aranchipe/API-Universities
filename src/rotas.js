const express = require('express');
const { cadastrarUniv, listarUniv, criarCollection } = require('./controllers/universities');
const rotas = express()
const University = require('./models/University')

rotas.post('/university', cadastrarUniv)
rotas.get('/university', listarUniv)
rotas.post('/criarCollection', criarCollection)






module.exports = rotas
