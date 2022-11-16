import { BASE_API_URL } from "../helpers/constants";
import { setUser } from '../features/userSlice';
import axios from "axios";

export default {

    setUserStore: function (dispatch, userId) {
        return axios.get(`${BASE_API_URL}/users/${userId}`)
            .then((response) => {
                dispatch(setUser(response.data.payload));
                return response.data.payload;
            })
    },
    setSelectAddress: function (userId, addressId) {
        return axios({
            method: "post",
            url: `${BASE_API_URL}/users/${userId}/default-address`,
            data: {
                addressId: addressId
            },
        })
            .then((response) => {
                return response.data
            })
            .catch((error) => {
                return error
            })

    }
}