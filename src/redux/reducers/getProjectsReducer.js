const defaultState = {
    projects: [],
}

export const getProjectsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'GET_PROJECTS':
            return { ...state, projects: [...action.payload] }
        case 'GET_PROJECT_BYTYPE':
            return { ...state, projects: [...action.payload] }
        default:
            return state
    }
}