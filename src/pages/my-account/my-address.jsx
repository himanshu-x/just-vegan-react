import React, { useState, useEffect } from "react";
import BaseIcon from "../../components/base-components/base-icon/BaseIcon";
import addressService from "../../services/addressService";
import { getLocalStorage } from "../../utils/common.util";



export default function MyAddress() {

    const [addresses, setAddresses] = useState([])
    const loginData = getLocalStorage('loginData');

    useEffect(() => {
        getAddress();
    }, [])

    function getAddress() {
        addressService.getAddressDetails(loginData.userId).then((addressDetails) => {
            setAddresses(addressDetails.addresses)
        })
    }


    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6  bg-white ">
            {
                addresses.map((address, index) => {
                    return (
                        <div className="flex flex-col shadow-sm py-3 px-3" key={"address" + index}>
                            <div className="flex gap-6">
                                <div className="font-normal"> {address.addressType} </div>
                                <div className="flex gap-1">
                                    <BaseIcon iconName="pencil" />
                                    <BaseIcon iconName="trash" />
                                </div>
                            </div>
                            <div className="flex flex-col lg:flex-row gap-2 font-semibold">
                                <div>{address.name}</div>
                                <div>{address.phone1}</div>
                            </div>
                            <div className="flex flex-col lg:flex-row text-gray-400">
                                <div>{address.landmark} </div>
                                <div>{address.addressLine}</div>
                                <div>{address.city}</div>
                                <div>{address.state}</div>
                                <div>{address.locality} </div>
                                <div>{address.pincode}</div>
                            </div>
                        </div>
                    )
                })
            }
        </div>

    )
}