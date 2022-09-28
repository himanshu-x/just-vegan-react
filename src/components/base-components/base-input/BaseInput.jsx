import React from "react";
// import { useForm } from "react-hook-form";




export default function BaseInput(props) {

    const { type, children, name, register, errors, validationRules, ...restInputProps } = props;

    const setErrorMessage = (fieldName, rulesKey, validationValue) => {
        const messageList = {
            required: `${fieldName} is requried`,
            minLength: `${fieldName} is need to be min ${validationValue} length`,
            maxLength: `${fieldName} is need to be max ${validationValue} length`,
            max: `${fieldName} is need to be max ${validationValue} number`,
            min: `${fieldName} is need to be min ${validationValue} number`,
            pattern: `${fieldName} must be follow this ${(/[A-Za-z]{3}/)} pattern`,
            disabled: `${fieldName} is disabled`,
        };

        return messageList[rulesKey];
    };

    const validFormRule = (validationRules) => {
        let finalRules = {}
        for (let rulesKey in validationRules) {
            finalRules[rulesKey] = {
                value: validationRules[rulesKey],
                message: setErrorMessage(name, rulesKey, validationRules[rulesKey])
            }
        }
        return finalRules
    }

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
            focus:outline-none" id={name}  {...register(`${name}`,
                validFormRule(validationRules)
            )} />
            {errors && errors[name] && <p role="alert" className="text-red-700">{errors[name].message}</p>}
            <label htmlFor={name} className="text-gray-400">{children}</label>
        </div>

    )
}
