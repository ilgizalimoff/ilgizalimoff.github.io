import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { activeCatReducer } from './reducers/activeCatReducer'
import { burgerReducer } from './reducers/burgerReducer'
import { navReducer } from './reducers/navReducer'
import { getPostsReducer } from './reducers/getPostsReducer'
import { getPostByIdReducer } from './reducers/getPostByIdReducer'
import { getProjectsReducer } from './reducers/getProjectsReducer'
import { getContactsReducer } from './reducers/getContactsReducer'

const rootReducer = combineReducers({
    navReducer,
    burgerReducer,
    activeCatReducer,
    getPostsReducer,
    getPostByIdReducer,
    getProjectsReducer,
    getContactsReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))