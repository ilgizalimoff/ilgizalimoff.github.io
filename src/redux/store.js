import { combineReducers, createStore } from 'redux'
import { burgerReducer } from './reducers/burgerReducer'
import { navReducer } from './reducers/navReducer'

const rootReducer = combineReducers({
    navReducer,
    burgerReducer
})

export const store = createStore(rootReducer)