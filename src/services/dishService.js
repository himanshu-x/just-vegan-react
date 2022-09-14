import { BASE_API_URL } from "../helpers/constants";

export default {
    getDishes: function () {
        return fetch(`${BASE_API_URL}/dishes`)
            .then(res => res.json())
            .then((response) => {
                return response.payload
            })
    },
    createNewDish: function (dishModel) {
        return fetch(`${BASE_API_URL}/dishes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dishModel),
        })
            .then((response) => response.json())
            .then((response) => {
                return console.log('Success:', response);
            })
    },
    getDish: function (dishId) {
        return fetch(`${BASE_API_URL}/dishes/${dishId}`)
            .then(res => res.json())
            .then((response) => {
                return response.payload
            })

    },

}