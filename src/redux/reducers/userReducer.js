import {SET_API_TOKEN, SET_USER} from "../actions/userAction";

const initalState = {
    user: "",
    apiToken: ""
}

const userReducer = (state = initalState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.value
            }
        case SET_API_TOKEN:
            return {
                ...state,
                apiToken: action.value
            }
        default:
            return state
    }
}
export default userReducer
