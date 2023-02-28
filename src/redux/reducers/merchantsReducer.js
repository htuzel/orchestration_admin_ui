import {SET_MERCHANTS} from "../actions/merchantsAction";

const initalState = {
    merchants: "",
    clients: ""
}

const merchantsReducer = (state = initalState, action) => {
    switch (action.type) {
        case SET_MERCHANTS:
            return {
                ...state,
                merchants: action.value
            }
        default:
            return state
    }
}
export default merchantsReducer
