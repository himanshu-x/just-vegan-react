import React from "react"
import { useState } from "react";
import { Link } from "react-router-dom";
import BaseIcon from "../base-icon/BaseIcon";

export default function BaseDropdown(props) {
    const { dropdownText, className, options, children, onStateChange } = props;
    const [isOpen, setIsOpen] = useState(false);
    const onDropdownClick = () => {
        setIsOpen(!isOpen);
        if (onStateChange) {
            onStateChange({
                isOpen
            })
        }
    };

    return (
        <div className={`relative ${className}`}>
            <button className="flex items-center px-4 py-2 gap-2 rounded-lg hover:bg-slate-50"
                onClick={onDropdownClick}>
                {
                    children ? children :
                        <React.Fragment>
                            {dropdownText}
                            {
                                isOpen ?
                                    <BaseIcon iconName="chevron-up" className="w-5 h-5"></BaseIcon>
                                    :
                                    <BaseIcon iconName="chevron-down" className="w-5 h-5"></BaseIcon>
                            }
                        </React.Fragment>
                }
            </button>
            {
                isOpen &&
                <ul className="absolute bg-white rounded-md border py-1 flex flex-col origin-top-right w-56 mt-2 right-0 z-10">
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