import React from "react";
import { useForm } from "react-hook-form";


export default function BaseInput(props) {
    // const { register, formState: { errors }, } = useForm();
    const { type, children, name, register, errors, validationRules, ...restInputProps } = props

    return (
        <div className="form-floating">
            <input  {...restInputProps} type={type} className="form-floating form-control
            block
            w-full
            px-4
            py-2
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
          focus:text-gray-700
          focus:bg-white
          focus:border-blue-600 
            focus:outline-none" id={name} placeholder={type} {...register(`${name}`, {
                required: {
                    value: true,
                    message: `${name} is required`
                },
                minLength: {
                    value: 4,
                    message: `${name}  is needs to be min 4 length.`
                }
            })} />
            {errors && errors[name] && <p role="alert" className="text-red-700">{errors[name].message}</p>}
            <label htmlFor={name} className="text-gray-400">{children}</label>
        </div>

    )
}
