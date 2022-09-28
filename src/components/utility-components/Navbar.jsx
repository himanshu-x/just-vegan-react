import { Link } from "react-router-dom";
import React, { useState, Fragment, useRef } from "react";
import { getLocalStorage } from "../../utils/common.util";
import LogoVegan from '../../images/vegan.png'
import BaseDropdown from "../base-components/base-dropdown-elements/BaseDropdown";
import BaseIcon from "../base-components/base-icon/BaseIcon";
import BaseButton from "../base-components/base-button/BaseButton";

function Navbar() {

    const loginData = getLocalStorage('loginData');
    // const profileDropdownRef = useRef();
    function handleLogout() {
        localStorage.clear(loginData)
        window.location.href = '/auth/login'
    }
    const MobileDataRenderMenu = () => {

        if (loginData && loginData.accessToken) {
            return (
                <BaseDropdown icon1="menu" icon2="x-mark" className="h-6 w-6 lg:hidden"
                    options={[
                        { text: 'My Profile', icon: '', url: '/my-account' },
                        { text: 'Wishlist', icon: '', url: '/my-account/favourite-dishes' },
                        { text: 'Home', icon: '', url: 'home' },
                        { text: 'Dishes', icon: '', url: 'dishes' },
                        { text: 'Offers', icon: '', url: 'offers' },
                        { text: 'Logout', icon: '', event: handleLogout, },
                    ]}>
                </BaseDropdown>
            )

        } else {
            return (
                <BaseDropdown icon1="menu" icon2="x-mark" className="h-6 w-6 lg:hidden"
                    options={[
                        { text: 'Login', icon: '', url: '/auth/login' },
                        { text: 'Sign-up', icon: '', url: '/auth/sign-up' },
                        { text: 'Home', icon: '', url: 'home' },
                        { text: 'Dishes', icon: '', url: 'dishes' },
                        { text: 'Offers', icon: '', url: 'offers' },

                    ]}>
                </BaseDropdown>
            )

        }
    }

    // const onRefButtonClick = () => {
    //     console.log(profileDropdownRef.current)
    //     profileDropdownRef.current.value = "Vihhsal thegreat!"
    // }

    const RenderMenu = () => {
        if (loginData && loginData.accessToken) {
            return (

                <Fragment>
                    <BaseButton variant="primary" className="flex px-4 py-2 gap-2" >
                        <BaseIcon iconName="cart" className="h-6 w-6"></BaseIcon> Cart
                    </BaseButton>

                    {/* <input type="text" name="refInpt" id="refInput" ref={profileDropdownRef} /> */}


                    <BaseDropdown dropdownText={loginData.name}

                        options={[
                            { text: 'My Profile', icon: '', url: '/my-account' },
                            { text: 'Wishlist', icon: '', url: '/my-account/favourite-dishes' },
                            { text: 'Logout', icon: '', event: handleLogout },
                        ]}>
                    </BaseDropdown>
                </Fragment>
            )

        } else {
            return (
                <>
                    <Link to="auth/login">
                        <BaseButton variant="primary">
                            Login
                        </BaseButton>
                    </Link>
                    <Link to="auth/sign-up">
                        <BaseButton variant="primary">
                            Sign-up
                        </BaseButton>
                    </Link>
                </>
            )
        }

    }

    return (

        <nav className="flex items-center justify-between px-8 py-3 max-w-[1200px] mx-auto w-full bg-slate-100 ">
            <div className="flex items-center flex-shrink-0 text-white mr-6 gap-2">
                <img src={LogoVegan} alt="vegan" style={{ width: "40px" }} />
                <span className="font-semibold text-3xl text-green-700  tracking-tight">VEGAN</span>
                {/* <button onClick={onRefButtonClick}>My Ref Button</button> */}

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
            <MobileDataRenderMenu />
        </nav>

    )
}
export default Navbar