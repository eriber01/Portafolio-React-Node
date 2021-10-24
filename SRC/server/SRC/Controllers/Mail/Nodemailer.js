const Nodemailer = require('nodemailer')

const SendMails = async (emailData) =>{

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
        subject: `Message from the Portfolio`,

        text: ` 
            Name: ${emailData.name},
            Last Name: ${emailData.lastname},
            Email: ${emailData.email},
            Phone: ${emailData.phone},
            Message: ${emailData.message}
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