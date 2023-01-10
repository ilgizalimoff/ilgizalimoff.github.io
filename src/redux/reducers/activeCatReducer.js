const defaultState = {
    activeElement: 0
}

export const activeCatReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'SET_ACTIVE_CAT':
            return { ...state, activeElement: action.payload }
        default:
            return state
    }
}