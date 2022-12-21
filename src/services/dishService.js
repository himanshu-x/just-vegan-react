import http from '../utils/http.util';

const dishService = {

    getDishes: function () {
        return http.get({
            url: `/dishes`,
            params: {
                query: JSON.stringify({
                    isActive: true
                })
            }
        }).then((response) => {
            return (response.data.payload)
        }).catch(error => console.log(error));
        // return fetch(`${BASE_API_URL}/dishes`)
        //     .then(res => res.json())
        //     .then((response) => {
        //         return response.payload
        //     })
    },

    createNewDish: function (dishModel) {
        return http.post({
            url: `/dishes`,
            data: dishModel
        }).then((response) => {
            // console.log(response)
            return response.data.payload
        })
            .catch(function (error) {
                console.log(error);
            });
    },
    getDish: function (dishId) {
        return http.get({
            url: `/dishes/${dishId}`
        }).then((response) => {
            return (response.data.payload)
        })
            .catch((error) => {
                console.log(error)

            })
    },

    addFavouriteDish: function (favDishId, userId) {
        return http.post({
            url: `/users/${userId}/add-favourite-dish`,
            data: { dishId: favDishId }
        }).then((response) => {
            // console.log(response)
            return response.data.payload
        })
    },

    removeFavouriteDish: function (favDishId, userId) {
        return http.post({
            url: `/users/${userId}/remove-favourite-dish`,
            data: { dishId: favDishId }
        }).then((response) => {
            console.log(response)
            return response.data.payload
        })
    },

    getFavouriteDishes: function (userId) {
        return http.get({
            url: `/users/${userId}`
        }).then((response) => {
            return (response.data.payload)
        })
            .catch(error => console.log(error));
    },

    addCartOrder: function (cartDishes, userId, orderAmount) {
        return http.post({
            url: `/orders`,
            data: {
                dishes: cartDishes,
                userId: userId,
                deliveryStatus: "received",
                orderAmount: orderAmount
            }
        }).then((response) => {
            // console.log(response)
            return response.data
        })
    },

    getCartOrders: function (userId) {
        return http.get({
            url: `/users/${userId}/orders`
        }).then((response) => {
            return (response.data.payload)
        })
    },

    updateDish: function (dishId, updateData) {
        return http.put({
            url: `/dishes/${dishId}`,
            data: updateData
        }).then((response) => {
            console.log(response)
            return response.data
        })
            .catch(function (error) {
                console.log(error);
            });
    },
}
export default dishService