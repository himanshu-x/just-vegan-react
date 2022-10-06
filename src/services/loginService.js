import { BASE_API_URL } from "../helpers/constants";
import axios from "axios";

export default {

    getLoginAccountDetails: function (userId) {
        return axios.get(`${BASE_API_URL}/users/${userId}`)
            .then((response) => {
                return response.data.payload
            })
            .catch((error) => {
                console.log(error)
            })
        // return fetch(`${BASE_API_URL}/users/${userId}`)
        //     .then(res => res.json())
        //     .then((response) => {
        //         return response.payload
        //     })

    },

    getLoginDetails: function (loginDetailsModel) {
        return axios({
            method: "post",
            url: `${BASE_API_URL}/auth/login`,
            data: loginDetailsModel,
        })
            .then((response) => {
                console.log('Success:', response);
                return response
            })



        // return fetch(`${BASE_API_URL}/auth/login`, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(loginDetailsModel),
        // })
        //     .then((response) => response.json())
        //     .then((response) => {
        //         console.log('Success:', response);
        //         return response
        //     })
    },
}