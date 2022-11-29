import http from "../utils/http.util"
import { setUser } from '../features/userSlice';

const userService = {

    setUserStore: function (dispatch, userId) {
        return http.get({
            url: `/users/${userId}`
        }).then((response) => {
            dispatch(setUser(response.data.payload));
            return response.data.payload;
        })
    },
    setSelectAddress: function (userId, addressId) {
        return http.post({
            url: `/users/${userId}/default-address`,
            data: {
                addressId: addressId
            },
        }).then((response) => {
            return response.data
        })
            .catch((error) => {
                return error
            })

    }
}
export default userService