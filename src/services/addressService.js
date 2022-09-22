import { BASE_API_URL } from "../helpers/constants";

export default {
    getAddressDetails: function (userId) {
        return fetch(`${BASE_API_URL}/users/${userId}`)
            .then(res => res.json())
            .then((response) => {
                console.log(response.payload)
                return response.payload
            })

    },


    getAddresses: function (addressAddModel, userId) {
        return fetch(`${BASE_API_URL}/users/${userId}/address`, {

            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(addressAddModel),
        })
            .then((response) => response.json())
            .then((response) => {
                console.log('Success:', response);
                return response
            })
    },

}