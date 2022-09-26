import React from "react";
import { Link, Outlet } from "react-router-dom";
import BaseButton from "../components/base-components/base-button/BaseButton";
import MYAddress from "./my-address"

export default function Addresses() {

  return (

    <div className=" flex flex-col shadow-md rounded-sm  gap-2 p-4 ">
      <div className="w-fit font-serif text-2xl">My Addresses</div>
      <div className="w-fit"> <MYAddress /></div>
      <div className="flex flex-col md:flex-row gap-3">
        <Link to="/my-account/addresses/add-addresses">
          <BaseButton variant="secondary">
            + New-Address
          </BaseButton>
        </Link>
        <Link to="/my-account/addresses">
          <BaseButton variant="secondary">
            Cancel
          </BaseButton>
        </Link>
      </div>
      <Outlet></Outlet>

    </div>




  )
}