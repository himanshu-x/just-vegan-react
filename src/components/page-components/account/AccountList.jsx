import React from "react";
import { Link, Outlet } from 'react-router-dom';

export default function AccountOption() {

    return (
        <div className="flex m-6">
            <ul className="bg-white  rounded-lg border h-fit border-gray-200 w-96 text-gray-900">
                <li className="px-6 py-2 border-b border-gray-200 w-full  rounded-t-lg"><Link to="/my-account"> My Account</Link></li>
                <li className="px-6 py-2 border-b border-gray-200 w-full"><Link to="/my-account/my-order"> My Order</Link></li>
                <li className="px-6 py-2 border-b border-gray-200 w-full"> <Link to="/my-account/manage-address"> Manage Address</Link></li>
                <li className="px-6 py-2 w-full rounded-b-lg"><Link to="/my-account/favourite-dishes">Favourite Dishes</Link></li>
            </ul>
            <Outlet>

            </Outlet>

        </div>
    )
}