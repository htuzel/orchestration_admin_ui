import axios from "axios";
import {API_URL} from "@/commons/constants";
import {CLIENT_USERS_LIMIT} from "@/commons/constants";

export const SET_CLIENT_USERS = "SET_CLIENT_USERS";
export const SET_SEARCHED_USERS = "SET_SEARCHED_USERS";

export const fetchClientUsersWithPagination = (domain, page) => {
    return async (dispatch, getState) => {
        try {
            let response = await axios.get(`${API_URL}/admin/client/users?domain=${domain}&page=${page}&limit=${CLIENT_USERS_LIMIT}`, {
                headers: {Authorization: `Basic ${getState().userReducer.apiToken}`}
            });
            dispatch(setClientUsers(domain, response.data))
        } catch (e) {
            console.log(e);
        }
    }
}

export const fetchUserWithSearch = (value) => {
    return async (dispatch, getState) => {
        try {
            let response = await axios.get(`${API_URL}/admin/user/search?email=${value}`, {
                headers: {Authorization: `Basic ${getState().userReducer.apiToken}`}
            });

            dispatch(setSearchedUsers(response.data))
        } catch (e) {
            console.log(e);
        }
    }
}


export const setClientUsers = (domain, users) => {
    return {
        type: SET_CLIENT_USERS,
        domain: domain,
        value: users
    }
}


export const setSearchedUsers = (value) => {
    return {
        type: SET_SEARCHED_USERS,
        value: value
    }
}