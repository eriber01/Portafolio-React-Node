import SendEmail from "./SendEmail"


const FormValidate = async (FormData, Action)=>{
    
    const data = {
        name: FormData.name,
        lastname: FormData.lastname,
        email: FormData.email,
        phone: FormData.phone,
        message: FormData.message,
        pass: FormData.pass
    }


    let emailStatus = {
        input: '',
        status: ''
    }

    if (Action === 'Contact') {
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
    
            SendEmail(data)
    
            emailStatus = {
                input: 'all',
                status: 'true'
            }
            
            return emailStatus
        }
    }else if (Action === 'Login') {

        if (!data.email.trim()) {
            emailStatus = {
                input: 'email',
                status:'false'
            }

            return emailStatus
        }else if (!data.pass.trim()) {
            emailStatus = {
                input: 'pass',
                status: 'false'
            }

            return emailStatus
        }else{
/* 
            const DataLogin = {
                User: data.email,
                Pass: data.pass
            }

            LoginService(DataLogin)
 */
            emailStatus = {
                input: 'all',
                status: 'true'
            }

            return emailStatus
        }

    }

    
}

export default FormValidate