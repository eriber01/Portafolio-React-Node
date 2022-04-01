// import { useState } from "react";
import swal from 'sweetalert'
// import FormValidate from '../../Services/FormValidate'
import { useImmerReducer } from "use-immer";
import SendEmail from "../../Services/SendEmail";

import actionsReducer, { initialState, schemaContact } from './reducer'
import { toast } from "react-toastify";

export const UseActions = () => {

    const [state, dispatch] = useImmerReducer(actionsReducer, initialState)

    const onChange = (data, path) => {
        dispatch({
            type: "CHANGE_VALUE",
            value: data,
            path: path
        })
    }

    const SendMessage = async (eve) => {
        eve.preventDefault()

        try {
            const payload = await schemaContact.validate({
                ...state
            })

            swal({
                title: 'Send Message',
                text: 'Are you sure to send the message?',
                icon: 'warning',
                buttons: ['Cancel', 'Send']
            }).then(res => {
                if (res) {
                    SendEmail(payload)
                    dispatch({ type: "DEFAULT_STATE" })
                    // swal({ text: "se envio el mensaje", icon: 'success', timer: '2000' })
                } else {
                    dispatch({ type: "DEFAULT_STATE" })
                    swal({ text: "Cancelaste el mensaje", icon: 'warning', timer: '2000' })
                }
            })

        } catch (error) {
            const text = JSON.stringify(error)
            const text2 = JSON.parse(text)
            toast.error(text2.message)
        }

    }

    return [{ state }, { SendMessage, onChange, dispatch }]
}