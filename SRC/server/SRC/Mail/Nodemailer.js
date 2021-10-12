const Nodemailer = require('nodemailer')

const SendMails = async () =>{

    const transporter = Nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'eriber01@gmail.com',
            pass: 'Anyara@01'
        }
    })

    const MailData = {
        from: 'eriber01@gmail.com',
        to: 'eriber01@gmail.com',
        subject: `Mensaje desde el Portafolios asunto: prueva`,

        text: ` 
            Nombre: nombre prueva,
            Apellido: apellido prueva,
            Email: email prueva,
            Telefono: telefono prueva,
            Message: message prueva
        `
    }

    await transporter.sendMail(MailData, (err, info)=>{
        if(err){
            console.log('no se pudo enviar el mensajasde' + err);
            //res.status(500).send(`no se pudo enviar el mensaje ${err}`)
        }else{
            console.log('se envio el mensaje');
            //res.status(200).send(`Se envio el mensaje ${info}`)
        }
    })
}

module.exports = SendMails