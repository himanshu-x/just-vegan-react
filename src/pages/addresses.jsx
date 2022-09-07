import React from "react";
import { Link, Outlet } from "react-router-dom";
import MYAddress from "./my-address"

export default function Addresses() {

  return (

    <div className=" flex flex-col shadow-md rounded-sm  gap-3 p-6 ">
      <div className="w-fit font-serif text-2xl">My Addresses</div>
      <div className="w-fit"> <MYAddress /></div>
      <div className="flex gap-3">
        <button type="button" class="text-white bg-gradient-to-r from-teal-400 via-teal-500 w-fit
             to-teal-600 hover:bg-gradient-to-br  focus:ring-teal-300
              font-medium rounded-lg text-md px-5 py-2 text-center mr-2 mb-2"><Link to="/my-account/addresses/add-addresses"> + New-Address </Link></button>
        <button type="button" class="text-white bg-gradient-to-r from-teal-400 via-teal-500 w-fit
              to-teal-600 hover:bg-gradient-to-br  focus:ring-teal-300 
              font-medium rounded-lg text-md px-4 py-2 text-center mr-2 mb-2"><Link to="/my-account/addresses"> Cancel </Link></button>
      </div>


      <Outlet></Outlet>

    </div>




  )
}