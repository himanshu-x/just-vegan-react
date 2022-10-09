import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import loginService from "../../services/loginService";
import { setLocalStorage } from "../../utils/common.util";
import BaseButton from "../../components/base-components/base-button/BaseButton";
import BaseInput from "../../components/base-components/form-elements/BaseInput";



export default function Login() {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        loginService.getLoginDetails(data).then((loginResult) => {
            // console.log(loginResult.payload)
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

                <BaseInput labelName="Email" type="email" id="emailId" name="emailId" register={register} errors={errors} validationRules={{
                    required: true,
                }} placeholder="Email" />
                <BaseInput labelName="Password" type="password" id="password" name="password" register={register} errors={errors} placeholder="password" validationRules={{
                    required: true,
                }} />
                <BaseButton type="submit" variant="secondary">Login</BaseButton>

            </form>
        </div>

    )
}