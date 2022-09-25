import React from "react";

export default function BaseButton({ variant, children, className, ...restProps }) {

    // const { variant, className, atClick, children, type = "button" } = props;

    console.log(`rest`)
    console.log(restProps)


    const defaultClasses = " items-center px-5 py-2.5 mr-2 mb-2 text-white focus:ring-4 font-medium rounded-lg text-md  focus:outline-none"
    const buttonType = {
        primary: `${defaultClasses} bg-green-700 hover:bg-green-800 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800`,
        secondary: `${defaultClasses} bg-[#D11243] hover:bg-pink-800 focus:ring-pink-300 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800`,
        success: `${defaultClasses} bg-gray-700 hover:bg-gray-800 focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800`,

    }


    return (
        <button {...restProps} className={`${buttonType[variant]} ${className}`}>
            {children}
        </button>
    )
}