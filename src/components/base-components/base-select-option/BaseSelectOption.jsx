import React from "react";
import { Fragment } from "react";


export default function BaseSelectOption(props) {

    const { options, name, labelName, register, errors, } = props;

    return (
        <Fragment>
            <div className="flex justify-center w-full">
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
                                <Fragment>
                                    <option value={option.value}>{option.optionName}</option>
                                </Fragment>
                            )
                        })
                    }
                </select>
            </div>
            {errors && errors[name] && <p role="alert" className="text-red-700">{errors[name].message}</p>}
        </Fragment>
    )
}