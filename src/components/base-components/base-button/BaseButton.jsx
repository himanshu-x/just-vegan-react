import React from "react";

export default function BaseButton(props) {

    const { variant, buttonText } = props;

    const buttonType = {
        Primary: " bg-green-700 text-white font-medium text-lg px-3   ",
        Secondary: " bg-pink-700 text-white font-medium text-lg px-3   ",
        Success: " bg-green-700 text-white  font-medium text-lg px-3  ",
        Warning: " bg-red-700 text-white  font-medium text-lg px-3  ",
        Info: " bg-pink-700 text-white  font-medium text-lg px-3  "

    }


    return (
        <button className={buttonType[variant]}>{buttonText}</button>

    )
}