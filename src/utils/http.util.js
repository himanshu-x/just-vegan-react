import { BASE_API_URL } from "../helpers/constants";
import axios from "axios";
import { getLocalStorage } from "./common.util";

const apiMethods = {

    put({ url, data }) {
        return axios({
            method: "put",
            url: `${BASE_API_URL}${url}`,
            data
        })
    },

    get({ url, params = {} }) {
        const loginData = getLocalStorage('loginData');
        return axios({
            url: `${BASE_API_URL}${url}`,
            method: 'get',
            params,
            headers: {
                "Authorization": `Bearer ${loginData.accessToken}`
            }
        });
    },

    post({ url, data }) {
        return axios({
            method: 'post',
            url: `${BASE_API_URL}${url}`,
            data
        });
    },


    postWithAuth({ url, data }) {
        const loginData = getLocalStorage('loginData');
        return axios({
            method: 'post',
            url: `${BASE_API_URL}${url}`,
            headers: {
                "Authorization": `Bearer ${loginData.accessToken}`
            },
            data
        });
    }
}

export default apiMethods;