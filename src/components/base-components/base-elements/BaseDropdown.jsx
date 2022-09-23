import React from "react"
import { useState } from "react";
import { Link } from "react-router-dom";

export default function BaseDropdown(props) {
    const { dropdownText, options } = props;
    const [isOpen, setIsOpen] = useState(false);
    console.log('BaseDropdown render called')

    const onDropdownClick = () => {
        console.log('onDropdownClick called')
        setIsOpen(!isOpen)
    }

    return (
        <div className="relative">
            <button className="flex items-center px-4 py-2 gap-2 rounded-lg hover:bg-slate-50"
                onClick={onDropdownClick}>
                {dropdownText}
                {
                    isOpen ?
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                        </svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                }
            </button>


            {
                isOpen &&
                <ul className="absolute bg-white rounded-md border py-1 flex flex-col origin-top-right w-56 mt-2 right-0">
                    {
                        options.map((option, index) => {
                            return (

                                option.url ?
                                    <Link to={option.url} className="w-full" key={'dropdown-option' + index + option.text}>
                                        <li className="flex hover:bg-slate-50 px-4 py-2 text-sm">
                                            {option.text}
                                        </li>
                                    </Link>
                                    :
                                    <button onClick={option.event} className="w-full" key={'dropdown-option' + index + option.text}>
                                        <li className="flex hover:bg-slate-50 px-4 py-2 text-sm">
                                            {option.text}
                                        </li>
                                    </button>

                            )
                        })
                    }
                </ul>
            }


        </div>

    )
}