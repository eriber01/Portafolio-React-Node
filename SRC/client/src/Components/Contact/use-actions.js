import { useState } from "react";
// import swal from 'sweetalert'
import FormValidate from '../../Services/FormValidate'
import { useImmerReducer } from "use-immer";

import actionsReducer, { initialState } from './reducer'

export const UseActions = () => {

    const [state, dispatch] = useImmerReducer(actionsReducer, initialState)

    const onChange = (data, path) => {
        dispatch({
            type: "CHANGE_VALUE",
            value: data,
            path: path
        })
    }

    const SendMessage = async () => {
        /* eve.preventDefault() */
        const Action = 'Contact'
        await FormValidate(state, Action)
            .then(res => {

                if (res.status === 'false') {
                    if (res.input === 'name') {
                        // setmailData({ ...mailData, name: '' })
                        onChange('', 'name')
                    } else if (res.input === 'lastname') {
                        onChange('', 'lastname')
                        // setmailData({ ...mailData, lastname: '' })
                    } else if (res.input === 'email') {
                        onChange('', 'email')
                        // setmailData({ ...mailData, email: '' })
                    } else if (res.input === 'phone') {
                        onChange('', 'phone')
                        // setmailData({ ...mailData, phone: '' })
                    } else if (res.input === 'message') {
                        onChange('', 'message')
                        // setmailData({ ...mailData, message: '' })
                        // dispatch({ type: "DEFAULT_STATE" })
                    }
                } else {
                    // setmailData({ ...mailData, name: '', lastname: '', email: '', phone: '', message: '' })
                    dispatch({ type: "DEFAULT_STATE" })
                }
            })
    }

    return [{ state }, { SendMessage, onChange, dispatch }]
}