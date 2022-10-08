import React from "react";
import { getLocalStorage } from "../../utils/common.util";
import { Navigate, Outlet } from 'react-router-dom'

const useAuth = () => {
    const user = getLocalStorage('loginData');
    if (user) {
        return true
    } else {
        return false
    }
}

const ProtectedRoutes = () => {

    const auth = useAuth()

    return auth ? <Outlet /> : <Navigate to="auth/login" />
}

export default ProtectedRoutes;