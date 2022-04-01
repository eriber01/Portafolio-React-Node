


export const initialState = {
    authenticate: null,
    crud: 'create'
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