import axios from "axios";
import { useState, useEffect } from "react";
import FormValidate from '../../../Services/FormValidate'

export const UseActions = () => {
    const [state, setActions] = useState({
        pName: "",
        pInfo: "",
        pGit: "",
        pLink: "",
    })


    //get the data for create a project
    const getNewProjectData = (data, type) => {
        if (type === 'pName') {
            setActions(state => ({
                ...state,
                pName: data
            }))
        } else if (type === 'pInfo') {
            setActions(state => ({
                ...state,
                pInfo: data
            }))
        } else if (type === 'pGit') {
            setActions(state => ({
                ...state,
                pGit: data
            }))
        } else if (type === 'pLink') {
            setActions(state => ({
                ...state,
                pLink: data
            }))
        }
    }

    //handle the send of the formulary
    const CreateProject = async (eve) => {
        eve.preventDefault()
        console.log(state);

        //! validate than any input of the formulary have data
        await FormValidate(state, 'Project')
            .then((result) => {
                console.log(result);
                if (result.status) {
                    console.log('is true');

                    setActions(state => ({
                        ...state,
                        pName: "",
                        pInfo: "",
                        pGit: "",
                        pLink: "",
                    }))

                    // fetch('/api/login')
                    //     .then((data) => data.json())
                    //     .then( response =>{
                    //         console.log(response);
                    //     })

                    // axios.get('/api/createProject')
                    //     .then((response) => {
                    //         console.log(response);
                    //     })

                    axios.post('/api/createProject', {
                        data: state
                    })
                    .then((response)=>{
                        console.log(response);
                    }).catch((error)=>{
                        console.log('saghdajshdjas');
                    })

                } else {
                    console.log('is false');

                    if (result.input === 'pName') {
                        setActions(state => ({
                            ...state,
                            pName: ""
                        }))
                    } else if (result.input === 'pInfo') {
                        setActions(state => ({
                            ...state,
                            pInfo: ""
                        }))
                    } else if (result.input === 'pGit') {
                        setActions(state => ({
                            ...state,
                            pGit: ""
                        }))
                    } else if (result.input === 'pLink') {
                        setActions(state => ({
                            ...state,
                            pLink: ""
                        }))
                    }
                }
            })
    }

    return [{ state }, { getNewProjectData, CreateProject }]
}