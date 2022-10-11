import React from "react";
import { getLocalStorage } from "../../utils/common.util";
import { Navigate, Outlet } from 'react-router-dom'

const useAuth = () => {
    const user = getLocalStorage('loginData');

    // usser?.userType
    if (user && user.userType === "admin") {
        return true
    } else {
        return false
    }
}
const AdminRoutes = () => {

    const auth = useAuth()

    return auth ? <Outlet /> : <Navigate to="/" />
}

export default AdminRoutes;