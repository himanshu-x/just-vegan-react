import React from "react";
import { Link, Outlet } from 'react-router-dom';

export default function AccountOption() {

    return (
        <div className="flex gap-3 m-9 ">

            <ul className="bg-white  rounded-lg border h-fit border-gray-200 w-48 text-gray-900">
                <Link to="/my-account" ><li className="px-6 py-2 border-b border-gray-200 w-full  rounded-t-lg">My Account</li></Link>
                <Link to="/my-account/my-orders" ><li className="px-6 py-2 border-b border-gray-200 w-full "> My Order</li></Link>
                <Link to="/my-account/addresses" ><li className="px-6 py-2 border-b border-gray-200 w-full ">Manage Address</li></Link>
                <Link to="/my-account/favourite-dishes" ><li className="px-6 py-2 w-full rounded-b-lg">Favourite Dishes</li></Link>
            </ul>
            <div>
                <Outlet>

                </Outlet>
            </div>


        </div>
    )
}