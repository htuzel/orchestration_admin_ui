import {setCookie} from "@/commons/helpers";
import axios from "axios";
import {API_URL, API_TOKEN_NAME} from "@/commons/constants";

export const SET_API_TOKEN = "SET_API_TOKEN";

export const login = (email, password) => {
    return async (dispatch, getState) => {
        try {
            let response = await axios.post(API_URL + '/login', {email, password});
            response = response.data;
            const token = response.token;
            if (token) {
                dispatch(setApiToken(token));
                setCookie(API_TOKEN_NAME, token)
                return true;
            }
        } catch (e) {
            return false;
        }
    }
}

export const setApiToken = (token) => {
    return async (dispatch) => {
        dispatch({
            type: SET_API_TOKEN,
            value: token
        })

        return true;
    }
}

