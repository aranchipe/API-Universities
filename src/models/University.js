const mongoose = require('mongoose')

const University = mongoose.model('University', {
    domains: [String],
    alpha_two_code: String,
    country: String,
    web_pages: [String],
    name: String,
    state_province: String
})

module.exports = University