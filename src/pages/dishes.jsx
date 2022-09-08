import React, { useState } from "react";
import { useEffect } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import dishService from '../services/dishService'
// import { useParams } from "react-router-dom";

export default function Dishes() {
    const [dishList, setDishList] = useState([]);

    function getDishes() {

        dishService.getDishes().then((dishes) => {
            setDishList(dishes)

        })
        // fetch(`${BASE_API_URL}/dishes`)
        //     .then(res => res.json())
        //     .then((response) => {
        //         // console.log(response)
        //         this.setState({
        //             dishList: response.payload

        //         })
        //     }, (error) => {
        //         console.log(error)

        //     })
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
                        // console.log(dish)
                        return (

                            <div className="flex flex-col gap-3 border rounded p-2 shadow-xl" key={'dish-' + dish._id}>
                                <Link to={'/dishes/' + dish._id}>
                                    <img className="w-full h-full object-center object-cover lg:w-full lg:h-full rounded-2xl" src={dish.imgUrl}></img>
                                </Link>

                                <div className="flex gap-2">
                                    <div>{dish.dishName}</div>
                                    <div>{<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="#e11d48" viewBox="0 0 24 24"  >
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>}</div>
                                </div>
                                <div className="flex flex-col">
                                    <div className="flex gap-1">
                                        <div className="font-bold">&#8377;{dish.price} </div>
                                        <div className="text-gray-700"><del>&#8377;{dish.price}</del></div>
                                    </div>

                                    <div className="text-gray-600">{dish.description}</div>
                                </div>
                                <div className=" border-t-2 rounded pt-3">
                                    <button className="bg-emerald-600  hover:bg-green-700 text-white  py-1 px-4 border  rounded-md">
                                        ADD
                                    </button>

                                </div>

                            </div>
                        )

                    })
                }

            </div>
        </div>

    )
}