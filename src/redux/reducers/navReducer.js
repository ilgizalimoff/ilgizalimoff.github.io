const defaultState = {
    activeItem: localStorage.getItem('activeItem')
}
export const navReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'SET_ACTIVE':
            return { ...state, activeItem: action.payload }
        default:
            return state
    }
}