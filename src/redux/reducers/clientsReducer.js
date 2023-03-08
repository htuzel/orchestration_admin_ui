import {SET_ALL_CLIENTS, SET_CLIENT_USERS, SET_SEARCHED_USERS} from "../actions/clientsAction";

const initalState = {
    allClients: [],
    clientUsers: {},
    searchedUsers: [],
}

const clientsReducer = (state = initalState, action) => {
    switch (action.type) {
        case SET_ALL_CLIENTS:
            return {
                ...state,
                allClients: action.value
            }
        case SET_CLIENT_USERS:
            return {
                ...state,
                clientUsers: {
                    ...state.clientUsers,
                    [action.domain]: {
                        ...state.clientUsers[action.domain],
                        [action.value.page]: action.value
                    }
                }
            }
        case SET_SEARCHED_USERS:
            return {
                ...state,
                searchedUsers: action.value
                // searchedUsers: {
                //     ...state.searchedUsers,
                //     [action.domain]: action.value
                // }
            }
        default:
            return state
    }
}
export default clientsReducer
