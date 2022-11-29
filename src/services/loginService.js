import http from '../utils/http.util';

const loginService = {

    getLoginAccountDetails: function (userId) {
        return http.get({
            url: `/users/${userId}`
        }).then((response) => {
            return response.data.payload
        })
        // return fetch(`${BASE_API_URL}/users/${userId}`)
        //     .then(res => res.json())
        //     .then((response) => {
        //         return response
        //     })

    },

    getLoginDetails: function (loginDetailsModel) {

        return http.post({
            url: `/auth/login`,
            data: loginDetailsModel
        }).then((response) => {
            return response.data;
        });


        // return axios({
        //     method: "post",
        //     url: `${BASE_API_URL}/auth/login`,
        //     data: loginDetailsModel
        // }).then((response) => {
        //     return response.data;
        // });
    },
}
export default loginService 