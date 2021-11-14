const express = require('express')

const Routes = express.Router()

const SendMails = require('../Controllers/Mail/Nodemailer')

Routes.get('/', async (req, res)=>{
    res.send({
        Name:'Eriber',
        Apellidos: 'Tejeda Amparo'
    })
})

Routes.post('/', async (req, res)=>{
    const emailData = await req.body.data
    /* console.log(emailData.name); */
    console.log(emailData);
    /* await SendMails(emailData) */
})

Routes.post('/login', async (req, res)=>{
    const loginData = await req.body.data
    console.log(loginData);
})

module.exports = Routes