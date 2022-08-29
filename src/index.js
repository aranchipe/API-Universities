require("dotenv").config();
const express = require('express');
const rotas = require('./rotas');
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())
app.use(cors())
app.use(rotas)

mongoose.connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})

app.listen(3000 || process.env.PORT)