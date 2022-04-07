
import * as yup from 'yup'

export const schemaProject = yup.object().shape({
    linkLocation: yup.string().required('The Link Location field is Empty'),
    linkCode: yup.string().required('The Git Link field is Empty'),
    projectDescription: yup.string().required('The Project Descriptions field is Empty'),
    projectResume: yup.string().required('The Project Resume field is Empty'),
    // imgProjectPrincipal: yup.,
    // imgProjectDetails1: ,
    // imgProjectDetails2: ,
    // imgProjectDetails3: ,
    textProjectDetails1: yup.string().required('The Text Details 1 field is Empty'),
    textProjectDetails2: yup.string().required('The Text Details 2 field is Empty'),
    textProjectDetails3: yup.string().required('The Text Details 3 field is Empty'),
})

export const initialState = {
    authenticate: null,
    crud: 'create',

    //variables of crud
    projectName: '',
    linkLocation: '',
    linkCode: '',
    projectDescription: '',
    projectResume: '',
    imgProjectPrincipal: '',
    imgProjectDetails1: '',
    imgProjectDetails2: '',
    imgProjectDetails3: '',
    textProjectDetails1: '',
    textProjectDetails2: '',
    textProjectDetails3: '',

}

export default function actionsReducer(state, actions) {
    switch (actions.type) {
        case "CHANGE_VALUE":
            state[actions.path] = actions.value
            return;
        default:
            return;
    }
}