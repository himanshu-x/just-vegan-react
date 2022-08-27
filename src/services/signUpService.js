import { BASE_API_URL } from "../helpers/constants";
export default {

    newAccountService: function (signUpModel) {
        return fetch(`${BASE_API_URL}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(signUpModel),
        })
            .then((response) => response.json())
            .then((response) => {
                return console.log('Success:', response);
            })
    },
}