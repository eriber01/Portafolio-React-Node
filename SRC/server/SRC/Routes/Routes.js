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

    await SendMails(emailData)
})

module.exports = Routes