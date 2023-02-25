import {setCookie, deleteCookie} from "@/commons/helpers";
import axios from "axios";
import {APP_URL} from "../../commons/";
import {setUser} from "./userAction";

export const SET_API_TOKEN = "SET_API_TOKEN";
export const API_TOKEN = "API_TOKEN";

export const login = (email, password) => {
    return async (dispatch, getState) => {

    }
}

export const setApiToken = (token) => {
    if (token) {
        setCookie(API_TOKEN, token)
    }
    else {
        deleteCookie(API_TOKEN);
    }

    return {
        type: SET_API_TOKEN,
        value: token
    }
}

