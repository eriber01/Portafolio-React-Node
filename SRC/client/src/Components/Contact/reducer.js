import * as yup from 'yup'

export const schemaContact = yup.object().shape({
    name: yup.string().required('The First Name field is Empty'),
    lastname: yup.string().required('The Last Name field is Empty'),
    email: yup.string().email().required('The Email field is Empty'),
    phone: yup.string().required("The Telephone field id Empty"),
    message: yup.string().required('The Message field is Empty')
})


export const initialState = {
    name: '',
    lastname: '',
    email: '',
    phone: '',
    message: ''
}


export default function actionsReducer(state, actions) {
    switch (actions.type) {
        case "CHANGE_VALUE":
            state[actions.path] = actions.value
            return;
        case "DEFAULT_STATE":

            state['name'] = ''
            state['lastname'] = ''
            state['email'] = ''
            state['phone'] = ''
            state['message'] = ''

            return;
        default:
            return;
    }
}