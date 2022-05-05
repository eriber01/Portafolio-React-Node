
import * as yup from 'yup'

export const schemaProject = yup.object().shape({
    // projectName: yup.string().required('The Project Name field is Empty'),
    // linkLocation: yup.string().required('The Link Location field is Empty'),
    // linkCode: yup.string().required('The Git Link field is Empty'),
    // projectDescription1: yup.string().required('The Project Descriptions 1 field is Empty'),
    // projectDescription2: yup.string().required('The Project Descriptions 2 field is Empty'),
    // projectDescription3: yup.string().required('The Project Descriptions 3 field is Empty'),
    // projectResume: yup.string().required('The Project Resume field is Empty'),
    // file0Validate: yup.bool().oneOf([true], "The Image 1 field is Empty"),
    // file1Validate: yup.bool().oneOf([true], "The Image 2 field is Empty"),
    // file2Validate: yup.bool().oneOf([true], "The Image 3 field is Empty"),
    // file3Validate: yup.bool().oneOf([true], "The Image 4 field is Empty"),
    // textProjectDetails1: yup.string().required('The Text Details 1 field is Empty'),
    // textProjectDetails2: yup.string().required('The Text Details 2 field is Empty'),
    // textProjectDetails3: yup.string().required('The Text Details 3 field is Empty'),
})

export const initialState = {
    // authenticate: null,
    crud: 'create',

    //variables of crud
    projectName: '',
    linkLocation: '',
    linkCode: '',
    projectDescription1: '',
    projectDescription2: '',
    projectDescription3: '',
    projectResume: '',
    file0Validate: false,
    file1Validate: false,
    file2Validate: false,
    file3Validate: false,
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