import React, { useState, useEffect } from "react";
import BaseButton from "../../components/base-components/base-button/BaseButton";
import BaseIcon from "../../components/base-components/base-icon/BaseIcon";
import loginService from "../../services/loginService";
import { getLocalStorage } from "../../utils/common.util";

export default function MyAccount() {
    let [accountDetails, setaccountDetails] = useState({})
    const loginData = getLocalStorage('loginData');



    useEffect(() => {
        getAccDetails();
    }, [])

    function getAccDetails() {
        loginService.getLoginAccountDetails(loginData.userId).then((account) => {
            setaccountDetails(account)
        })
    }

    function handleLogout() {
        localStorage.clear(loginData)
        window.location.href = '/auth/login'

    }

    return (

        <div className="bg-white rounded overflow-hidden shadow-lg min-w-[200px]">
            <div className="text-center p-6  bg-gray-800 border-b flex flex-col  ">
                <BaseIcon iconName="pencil" className="h-6 w-6 text-white  ml-auto " ></BaseIcon>
                <BaseIcon iconName="user" className="h-24 w-24 text-white mx-auto" ></BaseIcon>
                <p className="pt-2 text-lg font-semibold text-gray-50">{accountDetails.name}</p>
                <p className=" text-sm text-gray-50">{accountDetails.phone}</p>
                <p className="text-sm text-gray-100">{accountDetails.emailId}</p>

            </div>
            <BaseButton onClick={handleLogout} variant="success" className="py-2 px-4 w-full">Logout</BaseButton>
        </div>
    )
}