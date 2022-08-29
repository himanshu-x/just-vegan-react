import { BASE_API_URL } from "../helpers/constants";
export default {

    getLoginAccountDetails: function (userId) {
        return fetch(`${BASE_API_URL}/users/${userId}`)
            .then(res => res.json())
            .then((response) => {
                return response.payload
            })

    },

    getLoginDetails: function (loginDetailsModel) {
        return fetch(`${BASE_API_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(loginDetailsModel),
        })
            .then((response) => response.json())
            .then((response) => {
                console.log('Success:', response);
                return response
            })
    },
}