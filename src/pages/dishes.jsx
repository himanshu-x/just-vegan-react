import React, { useState } from "react";
import { useEffect } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import dishService from '../services/dishService'
import DishCard from "../components/page-components/DishCard";

export default function Dishes() {
    const params = useParams()

    const [dishList, setDishList] = useState([]);


    function getDishes() {

        dishService.getDishes().then((dishes) => {
            setDishList(dishes)

        })

    }


    useEffect(() => {
        getDishes()
    }, [])


    return (
        <div className="m-6">

            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Dishes</h2>
            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 ">
                {

                    dishList.map((dish) => {

                        return (
                            <DishCard dish={dish} />

                        )

                    })
                }

            </div>
        </div>

    )
}