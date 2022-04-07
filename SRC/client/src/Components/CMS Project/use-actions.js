import { useEffect } from "react";
import { auth } from "../../Services/FirebaseConfig";

import { useImmerReducer } from 'use-immer'

import Create from './CRUD/Create/Create'
import Delete from './CRUD/Delete/Delete'
import Update from './CRUD/Update/Update'

import actionsReducer, { initialState } from "./reducer";

export const UseActions = () => {

    const [state, dispatch] = useImmerReducer(actionsReducer, initialState)

    const onChange = (data, path) => {
        // console.log(data);
        dispatch({
            type: 'CHANGE_VALUE',
            value: data,
            path: path
        })
    }

    useEffect(() => {
        // validate the user login
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                console.log('is authenticate');
                onChange(user.email, 'authenticate')

            } else {
                console.log('is not login');
                onChange(null, 'authenticate')
            }
        })
    });

    //change de crud operation display
    const crudSelected = val => {
        if (val === 'create') {

            return <Create />
        } else if (val === 'update') {

            return <Update />
        } else if (val === 'delete') {

            return <Delete />
        }
    }

    //logout
    const LogOut = () => {
        auth.signOut()
    }

    const onSave = (eve) => {
        eve.preventDefault()
        console.log(state);
    }

    return [{ state }, { crudSelected, LogOut, onChange, dispatch, onSave }]
}