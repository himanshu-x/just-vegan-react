import React, { useState, useEffect } from "react";
import dishService from "../../services/dishService"
import { getLocalStorage } from "../../utils/common.util"


export default function FavouriteDishes() {

    const [FavouriteDishData, setFavouriteDishData] = useState([]);

    function getFavouriteDishes() {
        const UserData = getLocalStorage('loginData');
        dishService.getFavouriteDishes(UserData.userId).then((favData) => {
            // console.log(favData.favouriteDishes)
            setFavouriteDishData(favData.favouriteDishes)
        })
    }

    useEffect(() => {
        getFavouriteDishes()

    }, [])

    return (

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mx-auto w-[1000px]" >
            {
                FavouriteDishData.map((favourite) => {
                    return (
                        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg" key={favourite._id}>
                            <img className="w-full max-h-[350px] min-h-[350px]" src={favourite.imgUrl} alt="Sunset in the mountains" />
                            <div className=" flex flex-col gap-2 px-6 py-4">
                                <div className="font-bold text-xl mb-2">{favourite.dishName}</div>
                                <div className="flex flex-col">
                                    <div className="flex gap-1">
                                        <div className="font-bold text-[#D11243]">MRP:&#8377;{favourite.price} </div>
                                        <div className="text-gray-700"><del>&#8377;{favourite.price}</del></div>
                                    </div>

                                    <div className="text-gray-600">{favourite.description}</div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>


    )
}