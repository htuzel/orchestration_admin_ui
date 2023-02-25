import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../redux/reducers/index'

const store = preloadedState => createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk)
)

export default store
