const mongoose = require('mongoose')

module.exports = new mongoose.model('techSelectedModel',{
    projectId: String,
    techSelectedId: Number,
    techDescriptions: String
})