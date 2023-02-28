import axios from "axios";
import {API_URL} from "@/commons/constants";

export const SET_MERCHANTS = "SET_MERCHANTS";


export const fetchMerchants = () => {
    return async (dispatch, getState) => {
        let response = await axios.get(API_URL + '/admin/merchants', {
            headers: {Authorization: `Basic ${getState().userReducer.apiToken}`}
        });
        dispatch(setMerchants(response.data));
    }
}

export const setMerchants = (user) => {
    return {
        type: SET_MERCHANTS,
        value: user
    }
}