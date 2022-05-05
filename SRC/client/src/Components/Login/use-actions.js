// import { useState, useEffect } from "react";
// import FormValidate from '../../Services/FormValidate'
import LoginService from '../../Services/LoginService'
// import swal from 'sweetalert'
import { useHistory } from 'react-router-dom'

import { useImmerReducer } from "use-immer";

import actionsReducer, { initialState, schemaLogin } from "./reducer";
import { toast } from "react-toastify";
import { OnError } from '../../Services/OnError';


export const UseActions = () => {
    const [state, dispatch] = useImmerReducer(actionsReducer, initialState)
    const history = useHistory()

    const onChange = (data, path) => {
        dispatch({
            type: 'CHANGE_FIELD',
            payload: data,
            path: path
        })
    }

    const HandleLogin = async (event) => {
        event.preventDefault()

        try {
            const payload = await schemaLogin.validate({
                ...state
            })

            LoginService(payload)
                .then(res => {
                    if (res.alert === 'success') {
                        toast.success(res.message)
                        history.push('/CMSProject')
                    } else {
                        dispatch({
                            type: 'DEFAULT_VALUE'
                        })
                        toast.error(res.message)
                    }

                })

        } catch (error) {
            OnError(error)
        }
    }

    return [{ state }, { dispatch, onChange, HandleLogin }]
}