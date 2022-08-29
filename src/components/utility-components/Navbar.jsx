import { useNavigate } from "react-router-dom";
import { Link, Navigate } from "react-router-dom";
import React from "react";
// import { UserContext } from "../../App";
import { getLocalStorage } from "../../utils/common.util";


function Navbar() {

    // const { state, dispatch } = useContext(UserContext);

    const userData = getLocalStorage('userData');
    console.log(userData);
    const navigate = useNavigate();

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
                    <button className="bg-teal-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"><Link to="/my-account">  My-Account</Link>

                    </button>
                    <button className="bg-teal-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded" onClick={handleLogout}>
                        Log-Out
                    </button>
                </>
            )

        } else {
            return (
                <>
                    <div>
                        <Link to="auth/login" className="inline-block bg-teal-600 text-sm px-4 py-2 leading-none border rounded text-white
                     border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Login</Link>
                    </div>
                    <div>
                        <Link to="auth/sign-up" className="inline-block text-sm px-4 py-2 leading-none border rounded
                     text-white border-white bg-teal-600 hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Sign-Up</Link>
                    </div>
                </>
            )
        }

    }

    return (

        <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-4">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" /></svg>
                <span className="font-semibold text-3xl text-rose-800  tracking-tight">VEGAN</span>
            </div>
            <div className="block lg:hidden">
                <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                </button>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                    <Link to="home" className="block mt-4 text-lg lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                        Home
                    </Link>
                    <Link to="dishes" className="block mt-4 text-lg lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                        Dishes
                    </Link>
                    <Link to="offers" className="block mt-4 text-lg lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                        Offers
                    </Link>

                </div>
                <div className="flex gap-3">

                    <RenderMenu />

                </div>

            </div>
        </nav>


    )
}
export default Navbar