import { BASE_API_URL } from "../helpers/constants";

export default {

    getOffers: function () {
        return fetch(`${BASE_API_URL}/offers`)
            .then(res => res.json())
            .then((response) => {
                return response.payload
            })
    },

    getOffer: function (offerId) {
        return fetch(`${BASE_API_URL}/offers/${offerId}`)
            .then(res => res.json())
            .then((response) => {
                return response.payload
            })

    },

    createNewOffer: function (offerModel) {
        return fetch(`${BASE_API_URL}/offers`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(offerModel),
        })
            .then((response) => response.json())
            .then((response) => {
                return console.log('Success:', response);
            })
    },
}
