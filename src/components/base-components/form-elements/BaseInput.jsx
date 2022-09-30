import React from "react";

export default function BaseInput(props) {

    const { type, name, labelName, register, errors, validationRules, ...restInputProps } = props;

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

        // finalRules = {
        //     require:
        //         max: 4;
        // }

        if (type === 'number') {
            finalRules['valueAsNumber'] = true
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
                validFormRule(validationRules),

            )} />
            {errors && errors[name] && <p role="alert" className="text-red-700">{errors[name].message}</p>}
            <label htmlFor={name} className="text-gray-400">
                {labelName}
                {validationRules?.required && '*'}
            </label>
        </div>

    )
}
