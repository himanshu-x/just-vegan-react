import React from "react";
import { Fragment } from "react";


export default function BaseSelect(props) {

    const { options, name, labelName, register, errors, } = props;

    return (
        <div className="flex flex-col justify-center w-full">
            <select className="form-select appearance-none
      block
      w-full
      px-3
      py-3.5
      text-base
      font-normal
      text-gray-400
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" {...register(`${name}`, {
                required: {
                    value: true,
                    message: "select any one"
                }
            })}>
                <option value="">{labelName}</option>
                {
                    options.map((option, index) => {
                        return (
                            // <Fragment>
                            <option key={option.value + index} value={option.value}>{option.optionName}</option>
                            // </Fragment>
                        )
                    })
                }
            </select>
            {errors && errors[name] && <p role="alert" className="text-red-700">{errors[name].message}</p>}
        </div>
    )
}