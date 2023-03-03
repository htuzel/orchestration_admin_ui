import axios from "axios";
import {API_URL} from "@/commons/constants";
import asyncLoop from 'node-async-loop';

export const SET_MERCHANTS = "SET_MERCHANTS";
export const SET_CLIENTS = "SET_CLIENTS";


export const fetchMerchants = () => {
    return async (dispatch, getState) => {
        let response = await axios.get(API_URL + '/admin/merchants', {
            headers: {Authorization: `Basic ${getState().userReducer.apiToken}`}
        });
        const merchants = response.data;
        const allClients = [];

        return new Promise((resolve) => {
            asyncLoop(merchants, function (merchant, next) {
                const clients = merchant.clients;
                asyncLoop(clients, async function (client, next) {
                    if (client) {
                        const clientResponse = await dispatch(fetchClient(client.domain));
                        client["detail"] = clientResponse;
                        allClients.push(client);
                    }
                    next();
                }, function (err) {
                    next();
                });
            }, function (err) {
                dispatch(setMerchants(merchants));
                dispatch(setClients(allClients));
                resolve(merchants);
            });
        });
    };
};

export const setMerchants = (merchants) => {
    return {
        type: SET_MERCHANTS,
        value: merchants
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


export const setClients = (clients) => {
    return {
        type: SET_CLIENTS,
        value: clients
    }
}