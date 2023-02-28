import userReducer from './userReducer'
import merchantsReducer from './merchantsReducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    userReducer,
    merchantsReducer
})

export default rootReducer
