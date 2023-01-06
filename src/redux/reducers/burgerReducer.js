const burgerDefaultState = {
    display: 'none',
    menuRefItems: null
}

export const burgerReducer = (state = burgerDefaultState, action) => {
    switch (action.type) {
        case 'SET_VISIBLE_TRUE':
            return {
                ...state, display: state.display == 'none'
                    ? action.payload.menuRefItems.style.display = 'block'
                    : action.payload.menuRefItems.style.display = 'none'
            }
        default:
            return state
    }
}