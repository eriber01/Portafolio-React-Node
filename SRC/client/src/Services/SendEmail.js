import axios from 'axios'

const SendEmail = async (emailData)=>{
    
    const data = {
        name: emailData.name,
        lastname: emailData.lastname,
        email: emailData.email,
        phone: emailData.phone,
        message: emailData.message
    }

    let emailStatus = {
        input: '',
        status: ''
    }

    if(!data.name.trim()){
        emailStatus = {
            input: 'name',
            status: 'false'
        }
        return emailStatus
    }else if (!data.lastname.trim()) {
        emailStatus = {
            input: 'lastname',
            status: 'false'
        }
        return emailStatus
    }else if (!data.email.trim()) {
        emailStatus = {
            input: 'email',
            status: 'false'
        }
        return emailStatus
    }else if (!data.phone.trim()) {
        emailStatus = {
            input: 'phone',
            status: 'false'
        }
        return emailStatus
    }else if (!data.message.trim()) {
        emailStatus = {
            input: 'message',
            status: 'false'
        }
        return emailStatus
    }else{
        axios({
            method: 'post',
            url: '/api',
            data:{
                data
            }
        })

        emailStatus = {
            input: 'all',
            status: 'true'
        }
        
        return emailStatus
    }

}

export default SendEmail