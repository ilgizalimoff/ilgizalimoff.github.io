const burgerDefaultState = {
    display: 'none',
}

export const burgerReducer = (state = burgerDefaultState, action) => {
    switch (action.type) {
        case 'SET_VISIBLE':
            return {
                ...state, display: state.display == 'none'
                    ? 'block'
                    : 'none'
            }
        case 'SET_VISIBLE_FALSE':       
            return {
                ...state, display: 'none'
            }
        default:
            return state
    }
}