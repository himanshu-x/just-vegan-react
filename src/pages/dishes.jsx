import React, { useState } from "react";
import { useEffect } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import dishService from '../services/dishService'
import loginService from "../services/loginService";
import DishCard from "../components/page-components/DishCard";
import { getLocalStorage } from "../utils/common.util"

export default function Dishes() {
    // const params = useParams()

    const [dishList, setDishList] = useState([]);
    const [userData, setUserData] = useState({});

    function getUserDetails() {
        const loginData = getLocalStorage('loginData');
        // console.log(loginData)
        if (loginData && loginData.userId) {
            return loginService.getLoginAccountDetails(loginData.userId).then((userPayload) => {
                setUserData(userPayload)
            })
        }
    }

    function getDishes() {
        return dishService.getDishes().then((dishesPayload) => {
            setDishList(dishesPayload);
            return dishesPayload;
        });
    }

    async function fetchAsync() {
        await getUserDetails();
        getDishes();
    }

    useEffect(() => {
        fetchAsync();
    }, [])


    return (
        <div className="m-6">

            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Dishes</h2>
            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 ">
                {

                    dishList.map((dish) => {

                        return (
                            <DishCard dish={dish} key={dish._id} userData={userData} reFetchUser={getUserDetails} />

                        )

                    })
                }

            </div>
        </div>

    )
}