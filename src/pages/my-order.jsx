import React, { useState, useEffect } from "react";
import { getLocalStorage } from "../utils/common.util";
import dishService from "../services/dishService";
import BaseButton from "../components/base-components/base-button/BaseButton";


export default function MyOrder() {

    const [orders, setOrders] = useState([])
    const cartDishes = getLocalStorage('cartDishes');
    const loginData = getLocalStorage('loginData');

    function getOrders() {
        return dishService.getCartOrders(loginData.userId).then((cartPayload) => {
            console.log(cartPayload)
            setOrders(cartPayload);
        });
    }

    useEffect(() => {
        getOrders();
    }, [])


    return (

        <div className="shadow px-4">
            <ul role="list" className="my-6 divide-y divide-gray-200 ">
                {
                    orders.map((order) => {
                        return (

                            <li key={order._id} className="flex py-6 gap-2">
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                    <img
                                        src={order.imgUrl}
                                        alt={order.imageAlt}
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>
                                <div className="ml-4 flex flex-1 flex-col">
                                    <div>
                                        <div className="flex justify-between text-base gap-6 text-gray-900">
                                            <h3 className="font-medium text-pink-600">
                                                <a href={order.href}>{order.dishName}</a>
                                            </h3>
                                            <p className="ml-4 text-gray-500">price: {order.price}</p>
                                        </div>
                                        <p className="mt-1 text-sm text-gray-500">{order.description}</p>
                                    </div>
                                    <div className="flex flex-1 items-end justify-between text-sm">
                                        <p className="text-gray-500">Qty {order.quantity}</p>
                                        <BaseButton variant="secondary">Remove</BaseButton>
                                    </div>
                                </div>
                            </li>
                        )
                    })
                }

            </ul>
        </div>
    )
}