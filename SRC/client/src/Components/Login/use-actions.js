import { useState, useEffect } from "react";
import FormValidate from '../../Services/FormValidate'
import LoginService from '../../Services/LoginService'
import swal from 'sweetalert'
import {useHistory} from 'react-router-dom'


export const UseAcions = () =>{
    const [state, actions] = useState({saludo: 'Hola Mundo'})
    const History = useHistory()

    const [LoginInputData, setLoginInputData] = useState({email: "", pass: ""})

    const getEmail = email =>{
        setLoginInputData(LoginInputData =>({
            ...LoginInputData, 
            email: email
        }))
    }

    const getPass = pass =>{
        setLoginInputData(LoginInputData =>({
            ...LoginInputData,
            pass: pass
        }))
    }
    console.log(LoginInputData);


    const HandleLogin = async (event)=>{
        event.preventDefault()
        
        const Action = 'Login'
        await FormValidate(LoginInputData, Action)
            .then(res =>{
                if (res.status === 'false') {
                    if (res.input === 'email') {                        
                        // actions.getEmail("")
                        setLoginInputData(LoginInputData =>({
                            ...LoginInputData,
                            email: ""
                        }))
                    }else if (res.input === 'pass') {
                        // actions.getPass("")

                        setLoginInputData(LoginInputData =>({
                            ...LoginInputData,
                            pass: ""
                        }))
                    }
                }else{
                    
                    LoginService(/*LoginInputData*/LoginInputData)
                        .then( res=>{

                            if(res.alert === 'success'){
                                console.log('success');
                                History.push('/CMSProject')
                            }else{
                                swal({
                                    text: res.message,
                                    icon: 'warning'
                                })
                            }

                    })
                    
                    // actions.getPass("")
                    // actions.getEmail("")

                    setLoginInputData(LoginInputData =>({
                        ...LoginInputData,
                        email: "",
                        pass: ""
                    }))
                }
            })
    }



    return [{state, LoginInputData}, {getEmail, getPass, HandleLogin}]
}