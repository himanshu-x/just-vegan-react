import React from "react";

export default function BaseRadioInput(props) {

    const { name, labelName, register, errors, options } = props;

    return (
        <div className="flex flex-col gap-2 justify-center">
            <p className="font-medium leading-tight text-2xl  text-slate-600">{labelName}</p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 border px-4 py-4 rounded">
                {
                    options.map((option, index) => {
                        return (
                            <div key={index} className="form-check form-check-inline flex gap-1  ">
                                <input className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                    type="radio" name={name} id={`radio` + option.optionName} value={option.value}  {...register(`${name}`, {
                                        required: {
                                            value: true,
                                            message: "select any one"
                                        }
                                    })}
                                />
                                <label className="form-check-label inline-block text-gray-400" htmlFor={`radio` + option.optionName}>{option.optionName}</label>
                            </div>
                        )
                    })
                }
            </div>
            {errors && errors[name] && <p role="alert" className="text-red-700">{errors[name].message}</p>}

        </div >
    )
}