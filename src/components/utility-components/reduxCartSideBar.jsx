import React, { useState } from "react";
import { getLocalStorage, setLocalStorage } from "../../utils/common.util"
import { useSelector, useDispatch } from 'react-redux'
import { deleteDishFromCart, clearMyCart } from "../../features/dishCartSlice";
import BaseButton from "../base-components/base-button/BaseButton";
import BaseIcon from "../base-components/base-icon/BaseIcon";
import dishService from "../../services/dishService";
import withConfirm from "../hoc-components/withConfirm";


const ConfirmButton = withConfirm(BaseButton, {
    bodyText: "Are you sure you wan't Remove cart dish",
});

export default function CartSideBar(props) {
    const { nav, setNav } = props

    const cartDishes = useSelector((state) => state.dishCart.cartDishes);
    const dispatch = useDispatch()
    const loginData = getLocalStorage('loginData');

    const checkoutHandle = (cartDishes, clearMyCart, orderAmount,) => {
        return dishService.addCartOrder(cartDishes, loginData.userId, orderAmount)
            .then((data) => {
                if (data.payload) {
                    dispatch(clearMyCart())
                    window.location.href = '/dishes'
                }
                return data.payload;
            })
    }
    const orderAmount = cartDishes && cartDishes.length && cartDishes.map(item => item.price * item.quantity).reduce((total, value) => total + value, 0)


    return (

        <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl" >
            <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                <div className="flex items-start justify-between">
                    <div className="text-2xl font-medium text-pink-600">Shopping cart</div>
                    <div className="ml-3 flex h-7 items-center">
                        <BaseIcon onClick={() => setNav(!nav)} iconName="x-mark" className="w-8 h-8 hover:bg-pink-600 rounded-md " ></BaseIcon>
                    </div>
                </div>

                <div className="mt-8">
                    <div className="flow-root">
                        <ul role="list" className="my-6 divide-y divide-gray-200">
                            {
                                cartDishes && cartDishes.length && cartDishes.map((product, cIndex) => {
                                    // console.log(cIndex)
                                    return (

                                        <li key={product._id} className="flex py-6">
                                            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                <img
                                                    src={product.imgUrl}
                                                    alt={product.imageAlt}
                                                    className="h-full w-full object-cover object-center"
                                                />
                                            </div>
                                            <div className="ml-4 flex flex-1 flex-col">
                                                <div>
                                                    <div className="flex justify-between text-base  text-gray-900">
                                                        <h3 className="font-medium text-pink-600">
                                                            <a href={product.href}>{product.dishName}</a>
                                                        </h3>
                                                        <p className="ml-4 text-gray-500">price: {product.price}</p>
                                                        <p className="ml-4  ">Total: {product.price * product.quantity}</p>
                                                    </div>
                                                    <p className="mt-1 text-sm text-gray-500">{product.description}</p>
                                                </div>
                                                <div className="flex flex-1 items-end justify-between text-sm">
                                                    <p className="text-gray-500">Qty {product.quantity}</p>
                                                    <ConfirmButton
                                                        variant="secondary"
                                                        onConfirm={() => {
                                                            dispatch(deleteDishFromCart(cIndex))
                                                        }}>
                                                        Remove
                                                    </ConfirmButton>
                                                </div>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>

                    </div>
                </div>
            </div>

            <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                <div className="flex justify-between text-base font-medium text-gray-900">
                    <p className="text-pink-600">Order Amount</p>
                    Rs {orderAmount}
                </div>
                <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                <div className={cartDishes && cartDishes.length ? "flex justify-center text-center mt-6 " : " hidden justify-center text-center mt-6"}>
                    <BaseButton onClick={() => checkoutHandle(cartDishes, clearMyCart, orderAmount)} type="submit" variant="secondary" className="px-4 py-2">Checkout </BaseButton>
                </div>
                <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                    <p>
                        or
                        <button
                            type="button"
                            className="font-medium text-pink-600 hover:text-green-700"
                            onClick={() => setNav(!nav)}
                        >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                        </button>
                    </p>
                </div>
            </div>
        </div>


    )
}