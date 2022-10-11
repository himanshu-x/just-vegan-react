import { BASE_API_URL } from "../helpers/constants";
import axios from "axios";

export default {

    getLoginAccountDetails: function (userId) {
        return axios.get(`${BASE_API_URL}/users/${userId}`)
            .then((response) => {
                return response.data.payload
            })
        // return fetch(`${BASE_API_URL}/users/${userId}`)
        //     .then(res => res.json())
        //     .then((response) => {
        //         return response
        //     })

    },

    getLoginDetails: function (loginDetailsModel) {

        return axios({
            method: "post",
            url: `${BASE_API_URL}/auth/login`,
            data: loginDetailsModel
        }).then((response) => {
            return response.data;
        });
    },
}