import { useNavigate } from "react-router-dom";
import { Link, Navigate } from "react-router-dom";
import React, { useState } from "react";
import { getLocalStorage } from "../../utils/common.util";
import LogoVegan from '../../images/vegan.png'


function Navbar() {

    const userData = getLocalStorage('userData');
    // console.log(userData);
    const navigate = useNavigate();
    const [nav, setNav] = useState(false)


    const handleClick = () => {
        setNav(!nav)
    }

    function handleLogout() {
        localStorage.clear(userData)
        navigate(`/auth/login`, {
            replace: true
        });
    }

    const RenderMenu = () => {
        if (userData && userData.accessToken) {
            return (

                <>
                    <button className=" hover:bg-teal-700 text-white font-bold py-1 px-2 rounded"><Link to="/my-account">  My-Account</Link>
                    </button>
                    <button className=" hover:bg-teal-700 text-white font-bold py-1 px-2 rounded" onClick={handleLogout}>
                        Log-Out
                    </button>
                    <button className="bg-green-700 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                        </svg>
                        <span>My-Cart</span>
                    </button>
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

        <nav className="flex items-center justify-between px-8 py-4 max-w-[1200px] mx-auto w-full">
            <div className="flex items-center flex-shrink-0 text-white mr-6 gap-2">
                <img src={LogoVegan} alt="vegan" style={{ width: "40px" }} />
                {/* <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" /></svg> */}
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
                <div className={!nav ? 'hidden' : "lg:hidden absolute top-[-50] bg-white p-4 shadow-lg text-green-600 right-2 flex flex-col mt-6 text-2xl font-bold "}>
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