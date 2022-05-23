const express = require('express')
const Routes = express.Router()
const SendMails = require('../Controllers/Mail/Nodemailer')
// const fileUpload = require('express-fileupload')
// const path = require('path')

const ProjectModel = require('../Models/projects')

const techSelectData = require('../Models/techSelectData')
//Constructors
//Create Project
const CreateProject = require('../Controllers/CRUD/CreateProject')

Routes.get('/login', async (req, res) => {
    res.json({
        Name: 'Eriber',
        Apellidos: 'Tejeda Amparo'
    })
})

Routes.get('/postman', async (req, res) => {

    res.json({
        saludo: req.body
    })
})

Routes.post('/createProject', async (req, res) => {
    // await CreateProject(req, res)
    console.log(JSON.parse(req.body.array));
    res.json({ status: "success", data: req.body })

})

Routes.post('/sendMail', async (req, res) => {
    const emailData = await req.body.data
    /* console.log(emailData.name); */
    //console.log(emailData);
    await SendMails(emailData, res)
})

Routes.get('/getTechSelect', async (req, res) => {
    // console.log(req)
    
    const data = await techSelectData.find()
    // console.log(data2);
    res.json({data})
    
})



module.exports = Routes