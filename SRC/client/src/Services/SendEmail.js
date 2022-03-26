import axios from 'axios'

const SendEmail = async (emailData)=>{
    
    const data = emailData
    axios({
        method: 'post',
        url: '/api/sendMail',
        data:{
            data
        }
    })

}

export default SendEmail