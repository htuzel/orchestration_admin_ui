import userReducer from './userReducer'
import clientsReducer from './clientsReducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    userReducer,
    clientsReducer
})

export default rootReducer
