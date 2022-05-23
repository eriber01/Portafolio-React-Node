import { useEffect, useState } from "react";
import { auth } from "../../Services/FirebaseConfig";

import { useImmerReducer } from 'use-immer'

import Create from './CRUD/Create/Create'
import Delete from './CRUD/Delete/Delete'
import Update from './CRUD/Update/Update'
import axios from "axios";
import { toast } from "react-toastify";
import actionsReducer, { initialState, schemaProject } from "./reducer";
import { OnError } from "../../Services/OnError";
import { ProjectManagement } from "../../Services/ProjectManagement";

export const UseActions = () => {

    const [state, dispatch] = useImmerReducer(actionsReducer, initialState)
    const [authenticate, setAuthenticate] = useState({ isAuthenticate: null })

    const onChange = (data, path, isFile, fileValidate, arrayPath) => {

        if (isFile) {
            dispatch({
                type: 'CHANGE_VALUE',
                value: data.target.files[0],
                path: path
            })

            dispatch({
                type: 'CHANGE_VALUE',
                value: true,
                path: fileValidate
            })

        } else {
            dispatch({
                type: 'CHANGE_VALUE',
                value: data,
                path: path
            })
        }

    }

    useEffect(() => {
        axios.get('/api/getTechSelect')
            .then((response) => {

                if (response.status === 200) {


                    dispatch({
                        type: 'CHANGE_VALUE',
                        value: response.data.data,
                        path: 'selectData'
                    })
                    // return response.data
                } else {
                    toast.error('Has a error to Get the Tech Select Data')
                    return;
                }
            }
            ).catch(error => {
                OnError(error)
                return error
            })

    }, [dispatch])

    useEffect(() => {
        // validate the user login
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                console.log('is authenticate');
                setAuthenticate((authenticate) => ({
                    ...authenticate,
                    isAuthenticate: user.email
                }))
            } else {
                console.log('is not login');
                setAuthenticate((authenticate) => ({
                    ...authenticate,
                    isAuthenticate: null
                }))
            }
        })
    }, [authenticate.isAuthenticate]);
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

    const onSave = async (eve) => {
        eve.preventDefault();
        console.log(state);

        // {
        //     "crud": "create",
        //     "projectName": "asdasd",
        //     "linkLocation": "dasdasdasd",
        //     "linkCode": "asdasdas",
        //     "projectDescription": "asdasdasd",
        //     "projectResume": "asdasdasdasdas",
        //     "file0Validate": true,
        //     "file1Validate": true,
        //     "file2Validate": true,
        //     "file3Validate": true,
        //     "textProjectDetails1": "asdasdasd",
        //     "textProjectDetails2": "asdasdasdasd",
        //     "textProjectDetails3": "asdasdasdas",
        //     "file0": {},
        //     "file1": {},
        //     "file2": {},
        //     "file3": {}
        // }

        try {
            let fd = new FormData();

            const arrayData = [
                {
                    name: 'eriber',
                    lastname: "tejeda"
                },
                {
                    name: 'jeni',
                    lastname: 'perez'
                },
                {
                    name: 'daenerys',
                    lastname: 'tejedas perez'
                }
            ]

            fd.append('file0', state.file0)
            fd.append('file1', state.file1)
            fd.append('file2', state.file2)
            fd.append('file3', state.file3)
            fd.append("projectName", state.projectName)
            fd.append("linkLocation", state.linkLocation)
            fd.append("linkCode", state.linkCode)
            fd.append("projectDescription1", state.projectDescription1)
            fd.append("projectDescription2", state.projectDescription2)
            fd.append("projectDescription3", state.projectDescription3)
            fd.append("projectResume", state.projectResume)
            fd.append("textProjectDetails1", state.textProjectDetails1)
            fd.append("textProjectDetails2", state.textProjectDetails2)
            fd.append("textProjectDetails3", state.textProjectDetails3)
            fd.append('array', JSON.stringify(state.selectedTech))

            console.log(state)
            console.log(fd);
            const payload = await schemaProject.validate({
            })

            console.log(payload);

            const res = await ProjectManagement('create', fd)
            console.log(res);
        } catch (error) {
            console.log(error);
            OnError(error)
        }

    }

    const UniqueTechFn = (data) => {
        const validate = state.selectedTech.find(item => item.id === data.id)
        return validate;
    }

    const RemoveTech = (e, id) => {
        e.preventDefault()

        const data = state.selectedTech.filter(item => item.id !== id)
        console.log(data)

        dispatch({
            type: 'CHANGE_VALUE',
            value: data,
            path: 'selectedTech'
        })

        toast.success("Erased Tech")
    }

    const addTechCache = async (e) => {
        e.preventDefault()

        if (!state.techSelectedId) {
            toast.error('Select one Technology')
            return;
        } else if (!state.techDescriptions) {
            toast.error('Wright a Descriptions')
        } else {

            const obj = {
                id: state.techSelectedId,
                descriptions: state.techDescriptions,
                name: state.selectData.find(item => item._id === state.techSelectedId).techName
            }

            if (UniqueTechFn(obj)) {
                toast.error("This Tech is Already Added")

                return;
            } else {
                dispatch({
                    type: 'ADD_TECH',
                    value: obj,
                    path: 'selectedTech'
                })

                dispatch({
                    type: "CHANGE_VALUE",
                    value: '',
                    path: 'techDescriptions'
                })

                dispatch({
                    type: 'CHANGE_VALUE',
                    value: null,
                    path: 'techSelectedId'
                })

                toast.success(' Added Tech')
            }
        }

    }

    return [
        { state, authenticate },
        {
            crudSelected,
            LogOut,
            onChange,
            dispatch, onSave,
            addTechCache,
            RemoveTech,

        }
    ]
}