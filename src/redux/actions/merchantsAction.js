import axios from "axios";
import {API_URL} from "@/commons/constants";

export const SET_MERCHANTS = "SET_MERCHANTS";


export const fetchMerchants = () => {
    return async (dispatch, getState) => {
        const allClients = getState().clientsReducer.allClients;

        let response = await axios.get(API_URL + '/admin/merchants', {
            headers: {Authorization: `Basic ${getState().userReducer.apiToken}`}
        });
        const merchants = response.data;

        merchants.forEach(function (merchant) {
            const clients = merchant.clients;
            clients.forEach(function (client) {
                const selectedClient = allClients.filter((item) => item._id === client.domain);
                if (selectedClient[0]) {
                    client["detail"] = selectedClient[0];
                }
            })
        })

        dispatch(setMerchants(merchants));

        return merchants;
    };
};

export const setMerchants = (merchants) => {
    return {
        type: SET_MERCHANTS,
        value: merchants
    }
}
