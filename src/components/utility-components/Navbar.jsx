import { Link } from "react-router-dom";
import React, { Fragment, useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { useForm } from "react-hook-form";
import { getLocalStorage } from "../../utils/common.util";
import LogoVegan from '../../images/vegan.png'
import BaseDropdown from "../base-components/base-dropdown-elements/BaseDropdown";
import BaseIcon from "../base-components/base-icon/BaseIcon";
import BaseButton from "../base-components/base-button/BaseButton";
// import CartSideBar from "../utility-components/CartSideBar";
import CartSideBar from "../utility-components/reduxCartSideBar";
import BaseSelect from "../base-components/form-elements/BaseSelect";
import addressService from "../../services/addressService";



function Navbar() {


    const [nav, setNav] = useState(false)
    const [addresses, setAddresses] = useState([])
    const { register, formState: { errors } } = useForm();
    const loginData = getLocalStorage('loginData');

    const cartDishes = useSelector((state) => state.dishCart.cartDishes);
    // const defaultAddress = useSelector((state) => state.deliveryAddress.default);
    useEffect(() => {
        getAddress();
    }, [])

    function getAddress() {
        addressService.getAddressDetails(loginData.userId).then((addressDetails) => {
            // console.log(addressDetails.addresses)
            setAddresses(addressDetails.addresses)
        })
    }

    function handleLogout() {
        localStorage.removeItem('loginData')
        window.location.href = '/auth/login'
    }


    const MobileDataRenderMenu = () => {

        if (loginData && loginData.accessToken) {
            return (
                <BaseDropdown icon1="menu" icon2="x-mark" className="h-6 w-6 lg:hidden"
                    options={[
                        { text: 'My Profile', icon: '', url: '/my-account' },
                        { text: 'Wishlist', icon: '', url: '/my-account/favourite-dishes' },
                        { text: 'Home', icon: '', url: '/' },
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
                        { text: 'Home', icon: '', url: '/' },
                        { text: 'Dishes', icon: '', url: 'dishes' },
                        { text: 'Offers', icon: '', url: 'offers' },

                    ]}>
                </BaseDropdown>
            )

        }
    }



    const RenderMenu = () => {
        if (loginData && loginData.accessToken) {
            return (

                <Fragment>
                    {/* <div className="w-40 ">
                        <BaseSelect labelName="My-Address" register={register} errors={errors} options={[
                            { optionName: "xzcx" },
                            { optionName: "xzcx" },
                            { optionName: "xzcx" },


                        ]} ></BaseSelect>
                    </div> */}
                    <div className="flex justify-center">
                        <div className="mb-3 xl:w-96">
                            <select className="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                                <option selected>Open this select menu</option>
                                {
                                    addresses.map((address, index) => {
                                        return (
                                            <option value="1">Deliver to -
                                                <p>{address.name},</p>

                                                <p>{address.city},</p>
                                                <p>{address.pincode}</p>

                                            </option>
                                        )
                                    })
                                }


                            </select>
                        </div>
                    </div>

                    <BaseButton onClick={() => setNav(!nav)} variant="primary" className="flex px-4 py-2 gap-2" >
                        <BaseIcon iconName="cart" className="h-6 w-6"></BaseIcon> Cart
                        {/* <span>{context.cartDishes?.length}</span> */}
                        <span className="bg-green-100 text-green-800 text-xs font-semibold mx-1 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900">
                            {
                                cartDishes && cartDishes.length && cartDishes.reduce((total, item) => total + item.quantity, 0)
                            }
                        </span>
                    </BaseButton>

                    <BaseDropdown dropdownText={loginData.name} options={[
                        { text: 'My Profile', icon: 'user', url: '/my-account' },
                        { text: 'Wishlist', icon: 'heart', url: '/my-account/favourite-dishes' },
                        { text: 'Logout', icon: 'logout', event: handleLogout },
                    ]}>
                    </BaseDropdown>
                </Fragment >

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

                <Link to="/" className="flex gap-3 mt-4 text-xl lg:mt-0 font-semibold text-green-600 hover:text-pink-600 mr-4">
                    <img src={LogoVegan} alt="vegan" style={{ width: "40px" }} />
                    <span className="font-semibold text-3xl text-green-700  tracking-tight">VEGAN</span>
                </Link>

            </div>

            <div className="w-full flex-grow hidden lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                    <Link to="/" className="block mt-4 text-xl lg:inline-block lg:mt-0 font-semibold text-green-600 hover:text-pink-600 mr-4">
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

            {/* cart side bar  */}
            {nav ? <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0">  </div> : ""}
            <div className={nav ? "absolute top-0 right-0 w-[500px] bg-white z-10 duration-300" : "hidden"}>
                <CartSideBar nav={nav} setNav={setNav}></CartSideBar>
            </div>


        </nav>

    )
}
export default Navbar