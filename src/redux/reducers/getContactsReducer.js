const defaultState = {
    contacts: []
}

export const getContactsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'GET_CONTACTS':
            return { ...state, contacts: [...action.payload] }
        default:
            return state
    }
}