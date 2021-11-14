import axios from "axios";

const LoginService = async (DataLogin)=>{
    
    const data = DataLogin
    axios({
        method: 'post',
        url: '/api/login',
        data: {
            data
        }
    })
}

export default LoginService