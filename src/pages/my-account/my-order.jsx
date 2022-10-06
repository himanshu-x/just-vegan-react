import React, { useState, useEffect, Fragment } from "react";
import { getLocalStorage } from "../../utils/common.util";
import dishService from "../../services/dishService";
import BaseButton from "../../components/base-components/base-button/BaseButton";


export default function MyOrder() {

    const [orders, setOrders] = useState([])
    const loginData = getLocalStorage('loginData');

    function getOrders() {
        return dishService.getCartOrders(loginData.userId).then((cartPayload) => {
            // console.log(cartPayload)
            setOrders(cartPayload);
        });
    }

    useEffect(() => {
        getOrders();
    }, [])


    return (

        <div className=" border border-gray-300 rounded-lg ">
            {
                orders.map((order) => {
                    return (
                        <Fragment>
                            <div className=" grid grid-cols-2 px-4 py-4 bg-gray-200">
                                <div className="flex justify-between font-medium gap-6">
                                    <div className="flex flex-col">
                                        <div className="text-gray-500 text-xs">ORDER PLACED</div>
                                        <div className="text-pink-600">{order.orderDate}</div>
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="text-gray-500 text-xs">TOTAL</div>
                                        <div className="text-pink-600">Rs {order.orderAmount}</div>
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="text-gray-500 text-xs">SHIP TO</div>
                                        <div className="text-pink-600">Vishal Yadav</div>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-end items-end font-medium ">
                                    <div className="text-gray-500 text-xs">ORDER <span className="text-pink-600">{order.userId}</span> </div>
                                    <div className="flex  ">
                                        <div className="border-r border-gray-300 pr-2 text-pink-600">View Order Details</div>
                                        <div className="pl-2 text-pink-600"> Invoice</div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col  border-t border-gray-300 px-4 py-4 ">
                                <div className="text-pink-600 text-xl font-medium">{order.deliveryStatus}</div>
                                <div className="grid grid-cols-6 gap-2 p-2 w-full">
                                    {order.dishes.map((items) => {
                                        return (
                                            <img className="border rounded p-2 max-w-[100px] min-w-[100px] min-h-[100px]  max-h-[100px]" src={items.imgUrl} alt="Img" />
                                        )
                                    })}
                                </div>
                            </div>

                        </Fragment>
                    )
                })
            }
        </div>
    )
}