import React, { useState, useEffect } from "react";
import addressService from "../services/addressService";
import { getLocalStorage } from "../utils/common.util";



export default function MyAddress() {

    const [addresses, setAddresses] = useState([])
    const userData = getLocalStorage('userData');
    console.log(userData)

    useEffect(() => {
        getAddress();
    }, [])


    function getAddress() {
        addressService.getAddressDetails(userData.userId).then((addressDetails) => {
            console.log(addressDetails)
            setAddresses(addressDetails.addresses)
        })
    }


    return (
        <div className="flex flex-col gap-8 divide-y-2">
            {
                addresses.map((address) => {
                    return (
                        <div className="flex flex-col w-full shadow-sm py-3">
                            <div className="flex gap-6">
                                <div className="font-bold "> {address.addressType} </div>
                                <div className="flex gap-1  ">
                                    <div className=""><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                                    </svg>
                                    </div>
                                    <div> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                                    </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-2 font-bold">
                                <div>{address.name}</div>
                                <div>{address.phone1}</div>
                            </div>
                            <div className="flex gap-1 text-gray-400">
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