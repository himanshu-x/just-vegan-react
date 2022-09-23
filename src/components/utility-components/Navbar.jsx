import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { getLocalStorage } from "../../utils/common.util";
import LogoVegan from '../../images/vegan.png'
import BaseDropdown from "../base-components/base-elements/BaseDropdown";
import BaseIcon from "../base-components/base-icon/BaseIcon";
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


                    <BaseIcon iconName="play" bgIcon="green" />
                    <div onMouseLeave={() => setNav(false)} >
                        <button onMouseEnter={() => setNav(true)}
                            className="  text-green-700 text-xl  font-bold py-1 px-2 rounded hover:text-pink-700">{loginData.name}
                        </button>
                        {nav && (<div className="flex flex-col gap- bg-gray-100 absolute top-12 right-72 p-3">
                            <div className="flex gap-3 hover:bg-slate-200 p-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="green" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                </svg>

                                <button className="text-green-700"><Link to="/my-account"> My-Profile </Link></button>
                            </div>
                            <div className="flex gap-3 hover:bg-slate-200 p-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="green" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                </svg>
                                <button className="text-green-700"><Link to="/my-account/favourite-dishes">Wishlist</Link> </button>
                            </div>
                            <div className="flex gap-3 hover:bg-slate-200 p-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5.636 5.636a9 9 0 1012.728 0M12 3v9" />
                                </svg>
                                <button className="text-green-700" onClick={handleLogout}> Logout</button>
                            </div>

                        </div>)}
                    </div>
                    <button className="bg-green-700 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded inline-flex gap-1 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                        </svg>
                        <span>Cart</span>
                    </button>

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