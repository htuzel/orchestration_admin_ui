import {setCookie, deleteCookie} from "@/commons/helpers";
import axios from "axios";
import {APP_URL, API_TOKEN_NAME} from "@/commons/constants";
import {setUser} from "./userAction";

export const SET_API_TOKEN = "SET_API_TOKEN";
export const API_TOKEN = "API_TOKEN";

export const login = (email, password) => {
    return async (dispatch, getState) => {
        try {
            let response = await axios.post(APP_URL + '/login', {email, password});
            response = response.data;
            if (response.token) {
                dispatch(setApiToken(response.token));

                return true;
            }
        } catch (e) {
            return false;
        }
    }
}

export const setApiToken = (token) => {
    if (token) {
        setCookie(API_TOKEN_NAME, token)
    }
    else {
        deleteCookie(API_TOKEN_NAME);
    }

    return {
        type: SET_API_TOKEN,
        value: token
    }
}

