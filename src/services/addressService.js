import http from "../utils/http.util"

const addressService = {
    getAddressDetails: function (userId) {

        return http.get({ url: `/users/${userId}` })
            .then((response) => {
                return (response.data.payload)
            })
            .catch((error) => {
                console.log(error)
            })
    },

    getAddresses: function (addressAddModel, userId) {
        return http.post({
            url: `/users/${userId}/address`,
            data: addressAddModel,
        }).then((response) => {
            console.log('Success:', response);
            return response.data
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
export default addressService