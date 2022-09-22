import React from "react";
import { useState, useEffect } from "react";
import addressService from "../services/addressService";
import { Link } from "react-router-dom";
import { getLocalStorage } from "../utils/common.util";

export default function AddAddress() {
    const loginData = getLocalStorage('loginData');
    const [addressAddModel, setAddressAddModel] = useState({})

    const inputsHandle = (event) => {
        event.preventDefault();
        const { name, value } = event.target

        setAddressAddModel({

            ...addressAddModel,
            [name]: value
        })


    }

    function handleSubmit(event) {
        event.preventDefault();
        addressService.getAddresses(addressAddModel, loginData.userId).then((addressResult) => {

            console.log(addressResult)
            if (addressResult && addressResult._id) {

                alert('New dish with dish id ${addressResult._id} has been created.')

            }

        })
            .catch((error) => {
                alert(error)
            })

    }

    return (


        <div className="shadow-md flex flex-col gap-4">
            <h2 className="p-3 text-3xl"> New Address </h2>
            <form action="#" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-2 ">
                    <div className=" grid lg:grid-cols-2 gap-4 p-4">

                        <div className="flex flex-col gap-2">
                            <label htmlFor="name">Name</label>
                            <input onInput={inputsHandle} type="text" id="name" name="name" className="border border-gray-300 rounded-md " required />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="phone1">Phone1</label>
                            <input onInput={inputsHandle} id="phone1" type="text" name="phone1" className="border border-gray-300 rounded-md " required />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="locality">Locality</label>
                            <input onInput={inputsHandle} id="locality" type="text" name="locality" className="border border-gray-300 rounded-md " />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="landmark">Landmark</label>
                            <input onInput={inputsHandle} id="landmark" type="text" name="landmark" className="border border-gray-300 rounded-md " />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="city">City</label>
                            <input onInput={inputsHandle} id="city" type="text" name="city" className="border border-gray-300 rounded-md " required />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="pincode">Pincode</label>
                            <input onInput={inputsHandle} id="pincode" type="text" name="pincode" className="border border-gray-300 rounded-md " />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="state">State/Province</label>
                            <input onInput={inputsHandle} id="state" type="text" name="state" className="border border-gray-300 rounded-md " />
                        </div>

                        <div class=" flex flex-col justify-center gap-2 mb-3 xl:w-96">
                            <label htmlFor="state">Address Type</label>
                            <select onInput={inputsHandle} name="addressType" className="form-select appearance-none
block
w-full
px-2
text-base
font-normal
text-gray-700
bg-white bg-clip-padding bg-no-repeat
border border-solid border-gray-300
rounded-md
transition
ease-in-out
m-0
focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example" required>
                                <option selected>Choose Address Type</option>
                                <option value="Home">Home</option>
                                <option value="Office">Office</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 mx-4">
                        <label htmlFor="addressLine">Address-line</label>
                        <input onInput={inputsHandle} id="addressLine" type="text" name="addressLine" className="border border-gray-300 rounded-md " />
                    </div>

                    <button type="submit" class="text-white bg-gradient-to-r from-teal-400 via-teal-500 w-fit
             to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300
              font-medium rounded-lg text-md px-6 mx-4 py-1 text-center mr-2 mb-2"> Save</button>
                </div>
            </form>
        </div>
    )

}