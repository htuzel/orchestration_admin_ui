import userReducer from './userReducer'
import clientsReducer from './clientsReducer'
import featureLıstReducer from './featureListReducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    userReducer,
    clientsReducer,
    featureLıstReducer
})

export default rootReducer
