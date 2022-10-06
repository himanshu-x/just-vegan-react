import axios from "axios";
import { BASE_API_URL } from "../helpers/constants";

export default {
    getAddressDetails: function (userId) {

        return axios.get(`${BASE_API_URL}/users/${userId}`)
            .then((response) => {
                return (response.data.payload)
            })
            .catch((error) => {
                console.log(error)
            })
        // return fetch(`${BASE_API_URL}/users/${userId}`)
        //     .then(res => res.json())
        //     .then((response) => {
        //         console.log(response.payload)
        //         return response.payload
        //     })

    },


    getAddresses: function (addressAddModel, userId) {
        return axios({
            method: "post",
            url: `${BASE_API_URL}/users/${userId}/address`,
            data: addressAddModel,
        })
            .then((response) => {
                console.log('Success:', response);
                return response
            })
            .catch((error) => {
                console.log(error)
            })


        // return fetch(`${BASE_API_URL}/users/${userId}/address`, {

        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(addressAddModel),
        // })
        //     .then((response) => response.json())
        //     .then((response) => {
        //         console.log('Success:', response);
        //         return response
        //     })
    },

}