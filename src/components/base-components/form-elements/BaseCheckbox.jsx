import React, { Fragment } from "react";
import BaseErrors from "./BaseErrors";

export default function BaseCheckbox(props) {
    const { name, register, errors, labelName } = props;

    return (
        <Fragment>
            <div className="flex items-center gap-2">
                <input id={name} type="checkbox"
                    className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600
                    checked:border-blue-600 focus:outline-none transition duration-200 bg-no-repeat bg-center bg-contain cursor-pointer "
                    {...register(`${name}`)} />
                <label htmlFor={name} className="text-md text-gray-400 dark:text-gray-300">{labelName}</label>
            </div>
            {/* {errors && errors[name] && <p role="alert" className="text-red-700">{errors[name].message}</p>} */}
            <BaseErrors name={name} errors={errors} />
        </Fragment>
    )
}