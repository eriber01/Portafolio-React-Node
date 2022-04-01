import axios from 'axios'
import { toast } from 'react-toastify';

const SendEmail = async (emailData)=>{
    
    const data = emailData

    axios.post('/api/sendMail',{
        data: data
    }).then((response)=>{
        console.log(response);
        toast.success('The Message has been Sent')
    }).catch((error)=>{
        toast.error('Hubo un Error al Enviar el mensaje')
    })

}

export default SendEmail