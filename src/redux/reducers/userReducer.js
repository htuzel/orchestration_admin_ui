import {SET_API_TOKEN} from "../actions/authAction";

const initalState = {
    apiToken: ""
}

const userReducer = (state = initalState, action) => {
    switch (action.type) {
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
