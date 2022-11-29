import { BASE_API_URL } from "../helpers/constants";
import axios from "axios";
import { getLocalStorage } from "./common.util";

const apiMethods = {
    get({ url }) {
        const loginData = getLocalStorage('loginData');
        return axios({
            method: 'get',
            url: `${BASE_API_URL}${url}`,
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