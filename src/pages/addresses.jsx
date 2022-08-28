import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Addresses() {

    return (

        <div className=" border rounded-sm bg-black text-white p-6">
            <ul>
                <li>My Addresses</li>
                <li className="border rounded-md border-red-600 mt-2 p-1"><Link to="/my-account/add-addresses">Add-Address</Link></li>
            </ul>

        </div>




    )
}