import axios from "axios";
import {API_URL} from "@/commons/constants";
import asyncLoop from 'node-async-loop';

export const SET_MERCHANTS = "SET_MERCHANTS";


export const fetchMerchants = () => {
    return async (dispatch, getState) => {
        let response = await axios.get(API_URL + '/admin/merchants', {
            headers: {Authorization: `Basic ${getState().userReducer.apiToken}`}
        });
        const merchants = response.data;

        asyncLoop(merchants, function (merchant, next) {
            const clients = merchant.clients;
            asyncLoop(clients, async function (client, next) {
                if (client) {
                    const clientResponse = await dispatch(fetchClient(client.domain));
                    client["detail"] = clientResponse;
                }
                next();
            }, function (err) {
                next();
            });
        }, function (err) {
            dispatch(setMerchants(merchants));
        });

    }
}

export const setMerchants = (user) => {
    return {
        type: SET_MERCHANTS,
        value: user
    }
}

export const fetchClient = (domain) => {
    return async (dispatch, getState) => {
        let response = await axios.get(`${API_URL}/admin/client/stats?domain=${domain}&filter=7`, {
            headers: {Authorization: `Basic ${getState().userReducer.apiToken}`}
        });
        return response.data;
    }
}