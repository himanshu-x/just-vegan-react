import React from "react";
import { useState, useEffect, useContext } from "react";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import loginService from "../services/loginService";
import { setLocalStorage } from "../utils/common.util";
import { UserContext } from "../App";



function Login() {

    // const { state, dispatch } = useContext(UserContext)
    const [loginDetailsModel, setLoginDetailsModel] = useState({})
    const navigate = useNavigate();

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
            console.log(loginResult)
            if (loginResult && loginResult.payload && loginResult.payload.accessToken) {
                setLocalStorage('loginData', loginResult.payload);
                // navigate(`/my-account`, {
                //     replace: true
                // });
                window.location.href = '/my-account'
                // dispatch({ type: "USER", payload: true })
                // navigate(`my-account/${loginResult.payload.userId}`);
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
                <button type="submit" className=" px-6 py-2.5 bg-teal-600 text-white font-medium text-xs
                    leading-tight uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg
                    focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition duration-150 ease-in-out">Login</button>


            </form>
        </div>

    )
}

export default Login