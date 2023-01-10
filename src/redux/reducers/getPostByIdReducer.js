const defaultState = {
    postById: '',
    comments: []
}

export const getPostByIdReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'GET_POST_BYID':
            return { ...state, postById: action.payload }
        case 'GET_COMMENTS_BYID':
            return { ...state, comments: [...action.payload] }
        default:
            return state
    }
}