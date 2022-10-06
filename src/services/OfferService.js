import { BASE_API_URL } from "../helpers/constants";
import axios from "axios";

export default {

    getOffers: function () {
        return axios.get(`${BASE_API_URL}/offers`)
            .then((response) => {
                return (response.data.payload)
            })

        // return fetch(`${BASE_API_URL}/offers`)
        //     .then(res => res.json())
        //     .then((response) => {
        //         return response.payload
        //     })
    },

    getOffer: function (offerId) {
        return axios.get(`${BASE_API_URL}/offers/${offerId}`)
            .then((response) => {
                return (response.data.payload)
            })
    },

    createNewOffer: function (offerModel) {

        return axios({
            method: "post",
            url: `${BASE_API_URL}/offers`,
            data: offerModel
        })
            .then((response) => {
                console.log(response)
            })
            .catch(function (error) {
                console.log(error);
            });

        // return fetch(`${BASE_API_URL}/offers`, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(offerModel),
        // })
        //     .then((response) => response.json())
        //     .then((response) => {
        //         return console.log('Success:', response);
        //     })
    },
}
