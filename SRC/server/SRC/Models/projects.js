const mongoose = require('mongoose')

module.exports = new mongoose.model("ProductModel", {
    // id: ID,
    projectName: String,
    linkLocation: String,
    linkCode: String,
    projectDescription1: String,
    projectDescription2: String,
    projectDescription3: String,
    projectResume: String,
    imgProjectPrincipal: String,
    imgProjectDetails1: String,
    imgProjectDetails2: String,
    imgProjectDetails3: String,
    textProjectDetails1: String,
    textProjectDetails2: String,
    textProjectDetails3: String,
    createAt: Date /* {type: Date, default: Date.now} */,
    updateAt: Date
})