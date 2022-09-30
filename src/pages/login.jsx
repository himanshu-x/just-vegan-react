import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import loginService from "../services/loginService";
import { setLocalStorage } from "../utils/common.util";
import BaseButton from "../components/base-components/base-button/BaseButton";
import BaseInput from "../components/base-components/form-elements/BaseInput";



export default function Login() {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        loginService.getLoginDetails(data).then((loginResult) => {
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
            <form className="flex flex-col gap-6 justify-start items-center" onSubmit={handleSubmit(onSubmit)}>

                <BaseInput type="email" id="emailId" name="emailId" register={register} errors={errors} validationRules={{
                    required: true,
                }} placeholder="Email" >Email</BaseInput>
                <BaseInput type="password" id="password" name="password" register={register} errors={errors} placeholder="password" validationRules={{
                    required: true,
                }} >Password</BaseInput>
                <BaseButton type="submit" variant="secondary">Login</BaseButton>
                {/* <div className="flex flex-col gap-2 w-72">

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
                </div> */}

            </form>
        </div>

    )
}