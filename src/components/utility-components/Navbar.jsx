import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { getLocalStorage } from "../../utils/common.util";
import LogoVegan from '../../images/vegan.png'
import BaseDropdown from "../base-components/base-elements/BaseDropdown";
import BaseIcon from "../base-components/base-icon/BaseIcon";
import BaseButton from "../base-components/base-button/BaseButton";

function Navbar() {

    const loginData = getLocalStorage('loginData');
    const navigate = useNavigate();
    const [nav, setNav] = useState(false)


    const handleClick = () => {
        setNav(!nav)
    }

    function handleLogout() {
        localStorage.clear(loginData)
        navigate(`/auth/login`, {
            replace: true
        });
    }


    const RenderMenu = () => {
        if (loginData && loginData.accessToken) {
            return (

                <>
                    <BaseButton variant="primary" iconName="cart" className="flex gap-2" >
                        <BaseIcon iconName="cart" className="h-6 w-6"></BaseIcon> Cart
                    </BaseButton>
                    <BaseDropdown
                        dropdownText={loginData.name}
                        options={[
                            { text: 'My Profile', icon: '', url: '/my-account' },
                            { text: 'Wishlist', icon: '', url: '/my-account/favourite-dishes' },
                            { text: 'Logout', icon: '', event: handleLogout },
                        ]}>
                    </BaseDropdown>
                </>
            )

        } else {
            return (
                <>
                    <div>
                        <Link to="auth/login" className="inline-block bg-green-700 text-sm px-4 py-2 leading-none border rounded text-white
                     border-white hover:border-transparent hover:text-teal-500 hover:bg-pink-600 mt-4 lg:mt-0">Login</Link>
                    </div>
                    <div>
                        <Link to="auth/sign-up" className="inline-block text-sm px-4 py-2 leading-none border rounded
                     text-white border-white bg-green-700 hover:border-transparent hover:text-teal-500 hover:bg-pink-600 mt-4 lg:mt-0">Sign-Up</Link>
                    </div>
                </>
            )
        }

    }

    return (

        <nav className="flex items-center justify-between px-8 py-4 max-w-[1200px] mx-auto w-full bg-slate-100 ">
            <div className="flex items-center flex-shrink-0 text-white mr-6 gap-2">
                <img src={LogoVegan} alt="vegan" style={{ width: "40px" }} />
                <span className="font-semibold text-3xl text-green-700  tracking-tight">VEGAN</span>
            </div>

            <div className="w-full flex-grow hidden lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                    <Link to="home" className="block mt-4 text-xl lg:inline-block lg:mt-0 font-semibold text-green-600 hover:text-pink-600 mr-4">
                        Home
                    </Link>
                    <Link to="dishes" className="block mt-4 text-xl lg:inline-block lg:mt-0 font-semibold text-green-600 hover:text-pink-600 mr-4">
                        Dishes
                    </Link>
                    <Link to="offers" className="block mt-4 text-xl lg:inline-block lg:mt-0 font-semibold text-green-600 hover:text-pink-600 mr-4">
                        Offers
                    </Link>

                </div>
                <div className="flex gap-3">

                    <RenderMenu />
                </div>
            </div>

            {/* mobile view  */}
            <div className="flex flex-col">
                <div onClick={handleClick} className=' lg:hidden '>

                    {!nav ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 24" stroke-width="2.5" stroke="currentColor" className="w-6 text-green-700 h-6 cursor-pointer">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                    </svg>
                        : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 24" stroke-width="2.5" stroke="currentColor" className="w-6 text-green-700 relative cursor-pointer  h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    }
                </div>
                <div className={!nav ? 'hidden' : "lg:hidden absolute top-[-50] bg-white p-4 shadow-lg text-green-600 right-2 flex flex-col mt-6 text-2xl font-bold z-10 "}>
                    <Link onClick={handleClick} to="home" className=" ">
                        Home
                    </Link>
                    <Link onClick={handleClick} to="dishes" className="">
                        Dishes
                    </Link>
                    <Link onClick={handleClick} to="offers" className="">
                        Offers
                    </Link>

                </div>
            </div>
        </nav>

    )
}
export default Navbar