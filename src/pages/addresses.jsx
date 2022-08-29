import React from "react";
import { Link, Outlet } from "react-router-dom";
import MYAddress from "./my-address"

export default function Addresses() {

    return (

        <div className=" flex flex-col shadow-md rounded-sm  gap-3 p-6">
            <div>My Addresses</div>
            <div> <MYAddress /></div>
            <div className="border w-fit rounded-md  mt-2 py-2 px-4 bg-teal-400"><Link to="/my-account/addresses/add-addresses"> + New-Address</Link></div>
            <div className="border w-fit rounded-md  mt-2 py-2 px-4 bg-teal-400"><Link to="/my-account/addresses"> Cancel</Link></div>
            <Outlet></Outlet>

        </div>




    )
}