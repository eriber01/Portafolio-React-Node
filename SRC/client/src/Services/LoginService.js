import { auth } from "./FirebaseConfig"

const LoginService = async (loginData)=>{
    
    let Message = {
        alert: '',
        message: ''
    }
    await auth.signInWithEmailAndPassword(loginData.email, loginData.pass)
        .then(res =>{
            Message = {
                alert: 'success',
                message: 'Login Success'
            }
        }).catch( error =>{
            if (error.code === 'auth/user-not-found') {
                Message = {
                    alert: 'danger',
                    message: 'User Not Found'
                }
            }else if (error.code === 'auth/wrong-password') {
                Message = {
                    alert: 'danger',
                    message: 'The Pass is Incorrect'
                }
            }
        })

    return Message
}

export default LoginService