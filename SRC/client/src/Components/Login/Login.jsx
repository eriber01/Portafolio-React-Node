import React, {useState} from 'react'
import FormValidate from '../../Services/FormValidate'
import './Login.css'

const Login = () => {
    
    const [LoginInputData, setLoginInputData] = useState({ email: '', pass: ''})


    const HandleLogin = async (event)=>{
        event.preventDefault()
        
        const Action = 'Login'
        await FormValidate(LoginInputData, Action)
            .then(res =>{
                if (res.status === 'false') {
                    if (res.input === 'email') {
                        setLoginInputData({...LoginInputData, email: ''})
                    }else if (res.input === 'pass') {
                        setLoginInputData({...LoginInputData, pass: ''})
                    }
                }else{
                    setLoginInputData({...LoginInputData, email: '', pass: ''})
                }
            })
    }

    return (
        <div className="login-container">

            <nav className='nav-login-container'>
                <ul>
                    <li><a href="/">HOME</a></li>
                </ul>
            </nav>

            <h2>Hello Eriber Tejeda Amparo</h2>
            
            <div className="login">

                <div className='form-login-container'>
                    <form onSubmit={HandleLogin} className='form-login' action="">

                        <div className='login-ico'>
                            <ion-icon name="person-outline"></ion-icon>
                        </div>
                        

                        <div className='input-login-email'>
                            <ion-icon name="person-circle-outline"></ion-icon>
                            <input onChange={(event) =>setLoginInputData({...LoginInputData, email: event.target.value}) }
                                className='email-login' type="email" required={true} 
                                placeholder='Email' name="email" id="email"  value={LoginInputData.email}
                            />                        
                        </div>         

                        <div className='input-login-pass'>
                            <ion-icon name="key-outline"></ion-icon>
                            <input onChange={(event) =>setLoginInputData({...LoginInputData, pass: event.target.value})}
                                className='pass-login' type="password" required={true}
                                placeholder='Password' name="" id="pass"  value={LoginInputData.pass}
                            />
                        </div>
                        
                        <input className='btn-login' type="submit" value="Login" />
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Login
