import React from "react";
import { Children } from "react";

export default function BaseInput(props) {

    const { type, name, children, labelName, register, errors, validationRules, ...restInputProps } = props;

    const setErrorMessage = (rulesKey, validationValue) => {
        const messageList = {
            required: `${labelName} is requried`,
            minLength: `${labelName} is need to be min ${validationValue} length`,
            maxLength: `${labelName} is need to be max ${validationValue} length`,
            max: `${labelName} is need to be max ${validationValue} number`,
            min: `${labelName} is need to be min ${validationValue} number`,
            pattern: `${labelName} must be follow this ${validationValue} pattern`,
            disabled: `${labelName} is disabled`,
        };

        return messageList[rulesKey];
    };

    const validFormRule = (validationRules) => {
        let finalRules = {}
        for (let rulesKey in validationRules) {
            finalRules[rulesKey] = {
                value: validationRules[rulesKey],
                message: setErrorMessage(rulesKey, validationRules[rulesKey])
            }
        }

        if (type === 'number') {
            finalRules['valueAsNumber'] = true
        }
        return finalRules
    }

    return (
        <div className="form-floating">
            <input  {...restInputProps} type={type} className={`form-floating form-control
            block
            w-full
            px-4
            py-2
            text-base
            font-normal
            text-green-700
            bg-white bg-clip-padding
            border border-solid border-green-400
            rounded
            transition
            ease-in-out
          focus:text-green-700
          focus:bg-white
          focus:border-green-600 
            focus:outline-none` } id={name}  {...register(`${name}`, validFormRule(validationRules),)} >{children}</input>
            {errors && errors[name] && <p role="alert" className="text-red-700">{errors[name].message}</p>}
            <label htmlFor={name} className="text-gray-400">
                {labelName}
                {validationRules?.required && '*'}
            </label>
        </div>

    )
}
