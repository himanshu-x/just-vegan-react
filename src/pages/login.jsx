import React from "react";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import loginService from "../services/loginService";
import { setLocalStorage } from "../utils/common.util";
import BaseButton from "../components/base-components/base-button/BaseButton";



function Login() {

    const [loginDetailsModel, setLoginDetailsModel] = useState({})
    const onInputChange = (event) => {

        const { value, name } = event.target

        setLoginDetailsModel({
            ...loginDetailsModel,
            [name]: value
        })

    }

    const handleSubmit = (event) => {
        event.preventDefault();

        loginService.getLoginDetails(loginDetailsModel).then((loginResult) => {
            // console.log(loginResult)
            if (loginResult && loginResult.payload && loginResult.payload.accessToken) {
                setLocalStorage('loginData', loginResult.payload);
                window.location.href = '/my-account'
            } else {
                alert('Invalid login details, please use correct credentials.')
            }
        }).catch((error) => {
            alert(error)
        })
    }
    return (

        <div className="p-8 rounded-lg shadow-lg">
            <form className="flex flex-col gap-6 justify-start items-center" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-2 w-72">

                    <label htmlFor="emailId" className="text-sm text-slate-600">Email*</label>

                    <input type="email" className="form-control block border w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:outline-none" id="emailId" name="emailId"
                        value={loginDetailsModel.emailId}
                        placeholder="Email" onInput={onInputChange} required />
                </div>
                <div className="flex flex-col gap-2 w-72">

                    <label htmlFor="password" className="text-sm text-slate-600">Password*</label>

                    <input type="password" className="form-control block border w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:outline-none" id="password" name="password"
                        value={loginDetailsModel.password}
                        placeholder="Password" onInput={onInputChange} required />
                </div>
                <BaseButton type="submit" variant="secondary">Login</BaseButton>
            </form>
        </div>

    )
}

export default Login