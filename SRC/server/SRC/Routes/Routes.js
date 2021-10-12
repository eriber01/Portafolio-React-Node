const express = require('express')

const Routes = express.Router()

const SendMails = require('../Controllers/Mail/Nodemailer')

Routes.get('/', async (req, res)=>{
    res.send({
        Name:'Eriber',
        Apellidos: 'Tejeda Amparo'
    })

    //await SendMails()
})


module.exports = Routes