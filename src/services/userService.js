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

}