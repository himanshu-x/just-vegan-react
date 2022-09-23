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
    addFavouriteDish: function (favDishId, userId) {
        return fetch(`${BASE_API_URL}/users/${userId}/add-favourite-dish`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                dishId: favDishId
            }),
        })
            .then((response) => response.json())
            .then((response) => {
                return console.log('Success:', response);
            })
    },
    removeFavouriteDish: function (favDishId, userId) {
        return fetch(`${BASE_API_URL}/users/${userId}/remove-favourite-dish`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                dishId: favDishId
            }),
        })
            .then((response) => response.json())
            .then((response) => {
                return console.log('Success:', response);
            })
    },
    getFavouriteDishes: function (userId) {
        return fetch(`${BASE_API_URL}/users/${userId}`)
            .then(res => res.json())
            .then((response) => {
                return response.payload
            })

    },

}