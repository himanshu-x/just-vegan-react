import React from "react";

export default function BaseButton({ variant, children, className, ...restProps }) {

    const defaultClasses = " items-center px-4 py-2  text-white focus:ring-4 font-medium rounded-lg text-md  focus:outline-none"
    const buttonType = {
        primary: `${defaultClasses} bg-green-700 hover:bg-green-800 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800`,
        secondary: `${defaultClasses} bg-[#D11243] hover:bg-rose-800 focus:ring-rose-300 dark:bg-rose-600 dark:hover:bg-rose-700 dark:focus:ring-rose-800`,
        success: `${defaultClasses} bg-gray-700 hover:bg-gray-800 focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800`,

    }
    return (
        <button {...restProps} className={`${buttonType[variant]} ${className}`}>
            {children}
        </button>
    )
}