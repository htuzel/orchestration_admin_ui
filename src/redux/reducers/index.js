import userReducer from './userReducer'
import merchantsReducer from './merchantsReducer'
import clientsReducer from './clientsReducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    userReducer,
    merchantsReducer,
    clientsReducer
})

export default rootReducer
