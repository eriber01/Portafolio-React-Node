import { useState, useEffect } from "react";
import { auth } from "../../Services/FirebaseConfig";

import Create from '../CRUD/Create/Create'
import Delete from '../CRUD/Delete/Delete'
import Update from '../CRUD/Update/Update'

export const UseActions = () => {
    const [state, setActions] = useState({
        authenticate: null,
        crud: 'create'
    })

    useEffect(() => {
        // validate the user login
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                console.log('is authenticate');
                // setLoginState(user.email)
                setActions(state => ({
                    ...state,
                    authenticate: user.email
                }))
            } else {
                console.log('is not login');
                setActions(state => ({
                    ...state,
                    authenticate: null
                }))
            }
        })
    }, []);


    //handle the change of the menu
    const handleMenu = menu => {
        console.log(menu);
        if (menu === 'create') {
            setActions(state => ({
                ...state,
                crud: menu
            }))
        } else if (menu === 'update') {
            setActions(state => ({
                ...state,
                crud: menu
            }))

        } else if (menu === 'delete') {
            setActions(state => ({
                ...state,
                crud: menu
            }))
        }
    }

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

    return [{ state }, { handleMenu, crudSelected, LogOut }]
}