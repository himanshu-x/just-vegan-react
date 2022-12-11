import http from '../utils/http.util';

const offerService = {

    getOffers: function () {
        return http.get({
            url: `/offers`
        }).then((response) => {
            return (response.data.payload)
        })
    },

    getOffer: function (offerId) {
        return http.get({
            url: `/offers/${offerId}`
        }).then((response) => {
            return (response.data.payload)
        })
    },

    createNewOffer: function (offerModel) {

        return http.post({
            url: `/offers`,
            data: offerModel
        }).then((response) => {
            return response.data
        })

        // return axios({
        //     method: "post",
        //     url: `${BASE_API_URL}/offers`,
        //     data: offerModel
        // })
        //     .then((response) => {
        //         // console.log(response)
        //         return response.data
        //     })

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
export default offerService
