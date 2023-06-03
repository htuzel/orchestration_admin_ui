import axios from "axios";
import {API_URL} from "@/commons/constants";
import {CLIENT_USERS_LIMIT} from "@/commons/constants";

export const SET_CLIENT_USERS = "SET_CLIENT_USERS";
export const SET_SEARCHED_USERS = "SET_SEARCHED_USERS";
export const SET_ALL_CLIENTS = "SET_ALL_CLIENTS";

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

export const setClientUsers = (domain, users) => {
    return {
        type: SET_CLIENT_USERS,
        domain: domain,
        value: users
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

export const setSearchedUsers = (value) => {
    return {
        type: SET_SEARCHED_USERS,
        value: value
    }
}

export const fetchAllClients = (value) => {
    return async (dispatch, getState) => {
        try {
            let response = await axios.get(`${API_URL}/admin/merchants/clients/stats?filter=15`, {
                headers: {Authorization: `Basic ${getState().userReducer.apiToken}`}
            });
            dispatch(setAllClients(response.data))
        } catch (e) {
            console.log(e);
        }
    }
}

export const setAllClients = (allClients) => {
    return {
        type: SET_ALL_CLIENTS,
        value: allClients
    }
}

export const fetUserDetail = (userId,email,clientId) => {
    return async (dispatch, getState) => {
        let response = await axios.get(`${API_URL}/admin/client/users/stats?userId=6415a12dfc69a6fe1f9c631a&email=htegiz@yahoo.com&clientId=6415660be02a65eea49a00d6`, {
            headers: {Authorization: `Basic ${getState().userReducer.apiToken}`}
        });

        return response.data;
    }
}