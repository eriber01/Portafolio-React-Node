const express = require('express')
const Routes = express.Router()
const SendMails = require('../Controllers/Mail/Nodemailer')

const ProjectModel = require('../Models/projects')

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
        saludo: 'hola mundo'
    })
})

Routes.post('/createProject', async (req, res) => {
    // console.log(req.body.data);
    await CreateProject(req.body.data, res)
})

Routes.post('/sendMail', async (req, res) => {
    const emailData = await req.body.data
    /* console.log(emailData.name); */
    //console.log(emailData);
    await SendMails(emailData)
})

Routes.post('/createProject', async (req, res) => {
    const ProjectData = await req.body.data
    console.log(ProjectData);
    res.json({ status: "success" })
})

module.exports = Routes