const mongoose = require('mongoose')

module.exports = new mongoose.model('techSelectData', {
    techId: String,
    techLink: String,
    techName: String
})