import axios from "axios";
import {API_URL} from "@/commons/constants";

export const SET_USER = "SET_USER";

export const setUser = (user) => {
    return {
        type: SET_USER,
        value: user
    }
}