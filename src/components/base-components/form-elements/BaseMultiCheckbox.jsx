import React, { Fragment } from "react";


export default function BaseMultiCheckbox(props) {

    const { labelName, name, options, register, errors, } = props

    return (
        <Fragment>
            <h3 className="font-medium leading-tight text-2xl  text-slate-600 dark:text-white">{labelName}</h3>
            <ul className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200  dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                {
                    options.map((option, index) => {

                        return (
                            <li key={index} className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                <div className="flex items-center pl-3">
                                    <input id={option.optionName} type="checkbox" value={option.value} className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600
                    checked:border-blue-600 focus:outline-none transition duration-200 bg-no-repeat bg-center bg-contain cursor-pointer " {...register(`${name}`)} />
                                    <label htmlFor={option.optionName} className="py-3 ml-2 w-full text-md text-gray-400 dark:text-gray-300">{option.optionName}</label>
                                </div>
                            </li>
                        )
                    })
                }

            </ul>
            {errors && errors[name] && <p role="alert" className="text-red-700">{errors[name].message}</p>}
        </Fragment>

    )
}