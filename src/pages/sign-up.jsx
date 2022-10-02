import React from "react";
import { useForm } from "react-hook-form";
import BaseButton from "../components/base-components/base-button/BaseButton";
import BaseInput from "../components/base-components/form-elements/BaseInput";
import signUpService from '../services/signUpService'

export default function SignUp() {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        // console.log(data)
        signUpService.newAccountService(data).then((signupData) => {
            console.log(signupData)
        })
            .catch((error) => {
                console.error('Error:', error);
            });
    }


    return (
        <div className="  p-8 rounded-lg shadow-md " >
            <form className="flex flex-col gap-4 items-center" onSubmit={handleSubmit(onSubmit)}>
                <BaseInput labelName="Email" type="email" name="emailId" id="emailId" register={register} errors={errors} placeholder="emailId" validationRules={{
                    required: true,
                }} />
                <BaseInput labelName="Name" type="text" name="name" id="name" register={register} errors={errors} placeholder="name" validationRules={{
                    required: true,
                }} />
                <BaseInput labelName="Phone" type="number" name="phone" id="phone" register={register} errors={errors} placeholder="phone" validationRules={{
                    required: true,
                    maxLength: 11,
                    minLength: 10,
                }} />
                <BaseInput labelName="Password" type="password" name="password" id="password" register={register} errors={errors} placeholder="password" validationRules={{
                    required: true,
                    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/,
                }} />
                <BaseButton type="submit" variant="secondary">
                    Sign-up
                </BaseButton>
            </form>
        </div >
    )
}