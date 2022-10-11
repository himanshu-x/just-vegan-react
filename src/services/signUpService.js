import { BASE_API_URL } from "../helpers/constants";
import axios from "axios";
export default {

    newAccountService: function (signUpModel) {
        return axios({
            method: "post",
            url: `${BASE_API_URL}/users`,
            data: signUpModel,
            userType: "customer",
        })
            .then((response) => {
                console.log(response)
                return response.data
            })
            .catch(function (error) {
                console.log(error);
            });

    },
}
    // m1 methode
    // axios.post(`${BASE_API_URL}/users`, signUpModel)
    //     .then(function (response) {
    //         console.log(response);
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     });

    // m2 methode
    // fetch(`${BASE_API_URL}/users`, {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(signUpModel),
// })
//     .then((response) => response.json())
//     .then((response) => {
//         console.log('Success:', response);
//         return response
//     })