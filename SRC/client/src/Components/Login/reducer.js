import * as yup from 'yup'

export const schemaLogin = yup.object().shape({
    email: yup.string().email().required('The Email field is Empty'),
    pass: yup.string().required('The Password field is Empty')
})

export const initialState = {
    email: '',
    pass: ''
}


export default function actionsReducer(state, actions) {
    switch (actions.type) {
        case 'CHANGE_FIELD':
            state[actions.path] = actions.payload
            return;

        case 'DEFAULT_VALUE':
            state['email'] = ''
            state['pass'] = ''
            return;
        default:
            return;
    }
}