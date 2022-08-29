import React from "react";
import { useState, useEffect } from "react";
import addressService from "../services/addressService";
import { Link } from "react-router-dom";
import { getLocalStorage } from "../utils/common.util";

export default function AddAddress() {
    const userData = getLocalStorage('userData');
    const [addressAddModel, setAddressAddModel] = useState({})

    const inputsHandle = (event) => {
        const { name, value } = event.target

        setAddressAddModel({

            ...addressAddModel,
            [name]: value
        })


    }

    function handleSubmit(event) {
        event.preventDefault();
        addressService.getAddresses(addressAddModel, userData.userId).then((addressResult) => {

            console.log(addressResult)

        })
            .catch((error) => {
                alert(error)
            })

    }

    return (

        <div className="mt-10 sm:mt-0">
            <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="mt-5 md:mt-0 md:col-span-2">
                    <form action="#" onSubmit={handleSubmit}>
                        <div className="shadow overflow-hidden sm:rounded-md">
                            <div className="px-4 py-5 bg-white sm:p-6">
                                <div className="grid grid-cols-6 gap-6">

                                    <div className="col-span-6 sm:col-span-4 rounded-lg bg-teal-400 p-2 text-center w-fit">
                                        New-Address
                                    </div>
                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                                        <input type="text" name="name" id="name" autocomplete="given-name" className="mt-1
                                         focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
                                            onInput={inputsHandle} />
                                    </div>

                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="phone1" className="block text-sm font-medium text-gray-700">Phone1</label>
                                        <input type="text" name="phone1" id="phone1" autocomplete="phone1" className="mt-1
                                         focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
                                            onInput={inputsHandle} />
                                    </div>

                                    <div className="col-span-6 sm:col-span-4">
                                        <label htmlFor="email-address" className="block text-sm font-medium  text-gray-700">Email address</label>
                                        <input type="text" name="emailAddress" id="email-address" autocomplete="email" className="mt-1
                                         focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
                                            onInput={inputsHandle} />
                                    </div>
                                    <div className="col-span-6 sm:col-span-3">
                                        <div class="flex justify-center w-fit">
                                            <div class="mb-3 xl:w-96  col-span-6 sm:col-span-4 rounded-lg p-2 text-center ">
                                                <label htmlFor="addressType" className="block text-sm font-medium text-gray-700">Address-Type</label>
                                                <select onInput={inputsHandle} name="addressType" id="addressType" class="form-select appearance-none
      block
      w-full
      px-3
      py-1
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                                                    <option selected>Open this select Address Type</option>
                                                    <option value="home" name="addressType">Home</option>
                                                    <option value="office" name="addressType">Office</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="locality" className="block text-sm font-medium text-gray-700">Locality</label>
                                        <input type="text" name="locality" id="locality" autocomplete="locality" className="mt-1
                                         focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
                                            onInput={inputsHandle} />
                                    </div>



                                    <div className="col-span-6">
                                        <label htmlFor="addressLine" className="block text-sm font-medium text-gray-700">Address-Line</label>
                                        <input type="text" name="addressLine" id="addressLine" autocomplete="addressLine" className="mt-1
                                         focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
                                            onInput={inputsHandle} />
                                    </div>
                                    <div className="col-span-6">
                                        <label htmlFor="landmark" className="block text-sm font-medium text-gray-700">Landmark</label>
                                        <input type="text" name="landmark" id="landmark" autocomplete="landmark" className="mt-1
                                         focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
                                            onInput={inputsHandle} />
                                    </div>

                                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                        <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                                        <input type="text" name="city" id="city" autocomplete="address-level2" className="mt-1 focus:ring-indigo-500
                                         focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
                                            onInput={inputsHandle} />
                                    </div>
                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="pincode" className="block text-sm font-medium text-gray-700">Pincode</label>
                                        <input type="text" name="pincode" id="pincode" autocomplete="pincode" className="mt-1
                                         focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
                                            onInput={inputsHandle} />
                                    </div>

                                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                        <label htmlFor="state" className="block text-sm font-medium text-gray-700">State / Province</label>
                                        <input type="text" name="state" id="state" autocomplete="address-level1" className="mt-1 focus:ring-indigo-500
                                         focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
                                            onInput={inputsHandle} />
                                    </div>


                                </div>
                            </div>
                            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium 
                                    rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )

}