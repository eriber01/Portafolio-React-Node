import { useState } from "react";
import swal from 'sweetalert'
import FormValidate from '../../Services/FormValidate'


export const UseActions = () =>{

    const [mailData, setmailData] = useState({
        name: '',
        lastname:'',
        email: '',
        phone: '',
        message: ''
    })

    //trae la data del mensaje
    const getMessageData = (data, type) =>{

        if (type === "name") {
            setmailData(mailData =>({
                ...mailData,
                name: data
            }))
        }else if (type === "lastname") {
            setmailData(mailData =>({
                ...mailData,
                lastname: data
            }))
        }else if (type === "email") {
            setmailData(mailData =>({
                ...mailData,
                email: data
            }))
        }else if (type === "phone") {
            setmailData(mailData =>({
                ...mailData,
                phone: data
            }))
        }else if (type === "message") {
            setmailData(mailData =>({
                ...mailData,
                message: data
            }))
        }
    }

    const SendMessage = async ()=>{
        /* eve.preventDefault() */
        const Action = 'Contact'
        await FormValidate(mailData, Action)
            .then(res =>{

                if (res.status === 'false') {
                    if (res.input === 'name') {
                        setmailData({...mailData, name: ''})
                    }else if(res.input === 'lastname'){
                        setmailData({...mailData, lastname: ''})
                    }else if(res.input === 'email'){
                        setmailData({...mailData, email: ''})
                    }else if(res.input === 'phone'){
                        setmailData({...mailData, phone: ''})
                    }else if(res.input === 'message'){
                        setmailData({...mailData, message: ''})
                    }
                }else {
                    setmailData({...mailData, name: '', lastname: '', email: '', phone: '', message: ''})
                }
            })
    }

    return [{mailData}, {getMessageData, SendMessage}]
}