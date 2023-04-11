import Cookies from 'js-cookie'
import {SET_API_TOKEN} from "../actions/authAction";
import {API_TOKEN_NAME} from "@/commons/constants";

const initalState = {
    apiToken: Cookies.get(API_TOKEN_NAME) || ""
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
