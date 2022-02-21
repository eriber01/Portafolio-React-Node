// import React, {useState} from 'react'
// import FormValidate from '../../Services/FormValidate'
// import LoginService from '../../Services/LoginService'
//import {singInWithGoogle} from '../../Services/FirebaseConfig'
// import {useHistory} from 'react-router-dom'
import './Login.css'
// import swal from 'sweetalert'

import { UseActions } from './use-actions'

const Login = () => {
    
    const [state, actions] = UseActions()

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
                    <form onSubmit={event => actions.HandleLogin(event)} className='form-login' action="">

                        <div className='login-ico'>
                            <ion-icon name="person-outline"></ion-icon>
                        </div>
                        

                        <div className='input-login-email'>
                            <ion-icon name="person-circle-outline"></ion-icon>
                            <input onChange={(event) =>{
                                actions.getEmail(event.target.value)
                            }}
                                className='email-login' type="email" required={true} 
                                placeholder='Email' name="email" id="email"  value={state?.LoginInputData?.email}
                            />                        
                        </div>         

                        <div className='input-login-pass'>
                            <ion-icon name="key-outline"></ion-icon>
                            <input onChange={(event) =>{
                                actions.getPass(event.target.value)
                            }}
                                className='pass-login' type="password" required={true}
                                placeholder='Password' name="" id="pass"  value={state?.LoginInputData?.pass}
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
