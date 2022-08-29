require("dotenv").config();
const express = require('express');
const rotas = require('./rotas');
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()

app.use(express.json())
app.use(cors())
app.use(rotas)

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@apicluster.99sryeh.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => {
        app.listen(3000 || process.env.PORT)
    })
    .catch((err) => console.log(err))