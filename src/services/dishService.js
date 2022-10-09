import { BASE_API_URL } from "../helpers/constants";
import axios from "axios";

export default {
    getDishes: function () {
        return axios.get(`${BASE_API_URL}/dishes`)
            .then((response) => {
                return (response.data.payload)
            })
            .catch(error => console.log(error));
        // return fetch(`${BASE_API_URL}/dishes`)
        //     .then(res => res.json())
        //     .then((response) => {
        //         return response.payload
        //     })
    },
    createNewDish: function (dishModel) {

        return axios({
            method: "post",
            url: `${BASE_API_URL}/dishes`,
            data: dishModel
        })
            .then((response) => {
                console.log(response)
                return response.data.payload
            })
            .catch(function (error) {
                console.log(error);
            });
    },
    getDish: function (dishId) {
        return axios.get(`${BASE_API_URL}/dishes/${dishId}`)
            .then((response) => {
                return (response.data.payload)
            })
            .catch((error) => {
                console.log(error)

            })
        // return fetch(`${BASE_API_URL}/dishes/${dishId}`)
        //     .then(res => res.json())
        //     .then((response) => {
        //         return response.payload
        //     })

    },
    addFavouriteDish: function (favDishId, userId) {
        return axios({
            method: "post",
            url: `${BASE_API_URL}/users/${userId}/add-favourite-dish`,
            data: { dishId: favDishId }
        })
            .then((response) => {
                // console.log(response)
                return response.data.payload
            })

    },
    removeFavouriteDish: function (favDishId, userId) {

        return axios({
            method: "post",
            url: `${BASE_API_URL}/users/${userId}/remove-favourite-dish`,
            data: { dishId: favDishId }
        })
            .then((response) => {
                console.log(response)
                return response.data.payload
            })

    },

    getFavouriteDishes: function (userId) {
        return axios.get(`${BASE_API_URL}/users/${userId}`)
            .then((response) => {
                return (response.data.payload)
            })
            .catch(error => console.log(error));

    },

    addCartOrder: function (cartDishes, userId, orderAmount) {
        return axios({
            method: "post",
            url: `${BASE_API_URL}/orders`,
            data: {
                dishes: cartDishes,
                userId: userId,
                deliveryStatus: "received",
                orderAmount: orderAmount
            }
        })
            .then((response) => {
                console.log(response)
                return response.data
            })

    },

    getCartOrders: function (userId) {
        return axios.get(`${BASE_API_URL}/users/${userId}/orders`)
            .then((response) => {
                return (response.data.payload)
            })
    },

}