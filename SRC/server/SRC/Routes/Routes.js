const express = require('express')
const Routes = express.Router()
const SendMails = require('../Controllers/Mail/Nodemailer')


Routes.get('/login', async (req, res)=>{
    res.json({
        Name:'Eriber',
        Apellidos: 'Tejeda Amparo'
    })
})

Routes.post('/', async (req, res)=>{
    const emailData = await req.body.data
    /* console.log(emailData.name); */
    //console.log(emailData);
    await SendMails(emailData)
})

Routes.post('/createProject', async (req, res) =>{
    const ProjectData = await req.body.data
    console.log(ProjectData);
    res.json({status: "success"})
})

module.exports = Routes