import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
import loginService from "../services/loginService";
import { getLocalStorage } from "../utils/common.util";

export default function MyAccount() {
    let [accountDetails, setaccountDetails] = useState({})
    const userData = getLocalStorage('userData');
    // const params = useParams()
    console.log(userData)

    useEffect(() => {
        getAccDetails();
    }, [])

    function getAccDetails() {
        loginService.getLoginAccountDetails(userData.userId).then((account) => {

            setaccountDetails(account)
        })
    }
    // function getAccDetails() {
    //   
    //     fetch("https://8abb-2405-201-401a-dd3e-e5ad-ac6f-2be2-5b4e.ngrok.io/users")
    //         .then(res => res.json())
    //         .then((response) => {
    //             if (response && response.payload) {
    //                 setaccountDetails(response.payload)
    //             }
    //         }, (error) => {
    //             console.log(error)
    //         })
    // }


    return (


        <div className="container ">
            <section className=" h-screen  ">
                <div className="mx-auto container max-w-2xl md:w-3/4 shadow-md">
                    <div className="bg-gray-100 p-4 border-t-2 bg-opacity-5 border-indigo-400 rounded-t">
                        <div className="max-w-sm mx-auto md:w-full md:mx-0">
                            <div className="inline-flex items-center space-x-4">
                                <img
                                    className="w-10 h-10 object-cover rounded-full"
                                    alt="User avatar"
                                    src="https://avatars3.githubusercontent.com/u/72724639?s=400&u=964a4803693899ad66a9229db55953a3dbaad5c6&v=4"
                                />

                                <h1 className="text-gray-600">My Account</h1>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white space-y-6">
                        <div className="md:inline-flex space-y-4 md:space-y-0 w-full p-4 text-gray-500 items-center">
                            <h2 className="md:w-1/3 max-w-sm mx-auto">Account</h2>
                            <div className="md:w-2/3 max-w-sm mx-auto">
                                <label className="text-sm text-gray-400">Email</label>
                                <div className="w-full inline-flex border">
                                    <div className="pt-2 w-1/12 bg-gray-100 bg-opacity-50">
                                        <svg
                                            fill="none"
                                            className="w-6 text-gray-400 mx-auto"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                            />
                                        </svg>
                                    </div>
                                    <p className="w-11/12 focus:outline-none focus:text-gray-600 p-2">{accountDetails.emailId}</p>
                                </div>
                            </div>
                        </div>

                        <hr />
                        <div className="md:inline-flex  space-y-4 md:space-y-0  w-full p-4 text-gray-500 items-center">
                            <h2 className="md:w-1/3 mx-auto max-w-sm">Personal info</h2>
                            <div className="md:w-2/3 mx-auto max-w-sm space-y-5">
                                <div>
                                    <label className="text-sm text-gray-400">Full name</label>
                                    <div className="w-full inline-flex border">
                                        <div className="w-1/12 pt-2 bg-gray-100">
                                            <svg
                                                fill="none"
                                                className="w-6 text-gray-400 mx-auto"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                                />
                                            </svg>
                                        </div>
                                        <p className="w-11/12 focus:outline-none focus:text-gray-600 p-2">{accountDetails.name}</p>
                                    </div>
                                </div>
                                <div>
                                    <label className="text-sm text-gray-400">Phone number</label>
                                    <div className="w-full inline-flex border">
                                        <div className="pt-2 w-1/12 bg-gray-100">
                                            <svg
                                                fill="none"
                                                className="w-6 text-gray-400 mx-auto"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                                                />
                                            </svg>
                                        </div>
                                        <p className="w-11/12 focus:outline-none focus:text-gray-600 p-2">{accountDetails.phone}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr />
                        <div className="w-full p-4 text-right text-gray-500">
                            <button className="inline-flex items-center focus:outline-none mr-4">
                                <svg
                                    fill="none"
                                    className="w-4 mr-2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                    />
                                </svg>
                                Delete account
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}