const defaultState = {
    posts: []
}

export const getPostsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'GET_POSTS':
            return { ...state, posts: [...action.payload] }
        default:
            return state
    }
}