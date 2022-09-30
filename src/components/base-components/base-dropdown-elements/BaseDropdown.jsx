import React, { Fragment, useState } from "react"
import { Link } from "react-router-dom";
import BaseIcon from "../base-icon/BaseIcon";

export default function BaseDropdown(props) {
    const { dropdownText, className, options, children, icon1 = 'chevron-down', icon2 = 'chevron-up' } = props;
    const [isOpen, setIsOpen] = useState(false);

    const onDropdownClick = () => {
        setIsOpen(!isOpen);
    };

    const hideDropdown = () => {
        setIsOpen(false)
    };

    return (
        <div className={`relative ${className}`}>
            <button className="flex items-center px-4 py-2 gap-2 rounded-lg hover:bg-slate-50"
                onClick={onDropdownClick} >
                {
                    children ? children :
                        <Fragment>
                            {dropdownText}
                            {
                                isOpen ?
                                    <BaseIcon iconName={icon2} className="w-5 h-5"></BaseIcon>
                                    :
                                    <BaseIcon iconName={icon1} className="w-5 h-5"></BaseIcon>
                            }
                        </Fragment>
                }
            </button>
            {
                isOpen &&
                <ul className="absolute bg-white rounded-md border py-1 flex flex-col origin-top-right w-56 mt-2 right-0 z-10"
                    onClick={hideDropdown}>
                    {
                        options.map((option, index) => {
                            return (

                                option.url ?
                                    <Link to={option.url} className="w-full" key={'dropdown-option' + index + option.text}>
                                        <li className="flex gap-3 hover:bg-slate-50 px-4 py-2 text-sm">
                                            <BaseIcon iconName={option.icon} ></BaseIcon> {option.text}
                                        </li>

                                    </Link>
                                    :
                                    <button onClick={option.event} className="w-full" key={'dropdown-option' + index + option.text}>
                                        <li className="flex gap-3 hover:bg-slate-50 px-4 py-2 text-sm">
                                            <BaseIcon iconName={option.icon} ></BaseIcon>  {option.text}
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