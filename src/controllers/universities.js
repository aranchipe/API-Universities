const University = require("../models/University")
const api = require('../services/axios')

const criarCollection = async (req, res) => {
    const response = await api.get('/search')

    const universidades = response.data.filter((item) => {
        return item.country === 'Uruguay' ||
            item.country === 'Brazil' ||
            item.country === 'Argentina' ||
            item.country === 'Chile' ||
            item.country === 'Paraguay' ||
            item.country === 'Colombia' ||
            item.country === 'Peru' ||
            item.country === 'Suriname'
    })

    universidades.map(async (item) => {
        await University.create({
            domains: item.domains,
            alpha_two_code: item.alpha_two_code,
            country: item.country,
            web_pages: item.web_pages,
            name: item.name,
            state_province: item['state-province']
        })
    })

    return res.status(200).json(universidades)
}

const listarUniv = async (req, res) => {
    try {
        const universities = await University.find()
        return res.status(200).json(universities)
    } catch (error) {
        return res.status(500).json({ "message": "error" })

    }
}

const cadastrarUniv = async (req, res) => {
    const {
        domains,
        alpha_two_code,
        country, web_pages,
        name,
        state_province
    } = req.body

    try {
        await University.create({
            domains,
            alpha_two_code,
            country, web_pages,
            name,
            state_province
        })
        return res.status(200).json({ message: 'Universidade cadastrada com sucesso' })

    } catch (error) {
        return res.status(500).json({ message: error })
    }
}


module.exports = {
    cadastrarUniv,
    listarUniv,
    criarCollection
}