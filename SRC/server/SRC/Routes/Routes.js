const express = require('express')

const Routes = express.Router()

const SendMails = require('../Mail/Nodemailer')

Routes.get('/', async (req, res)=>{
    res.send({
        name:'nose',
        apellido: 'que se yo'
    })

    //await SendMails()
})


module.exports = Routes