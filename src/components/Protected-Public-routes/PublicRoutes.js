import React from 'react';
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

const PublicRoutes = (props) => {

    const auth = useAuth()

    return auth ? <Navigate to="/my-account" /> : <Outlet />
}

export default PublicRoutes;