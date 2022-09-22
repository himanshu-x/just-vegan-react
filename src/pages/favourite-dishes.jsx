import React, { useState, useEffect } from "react";
import dishService from "../services/dishService"
import { getLocalStorage } from "../utils/common.util"


export default function FavouriteDishes() {

    const [FavouriteDishData, setFavouriteDishData] = useState([]);
    const [quantity, setQuantity] = useState(0);
    const [showAddCart, setShowAddCart] = useState(true)

    function getFavouriteDishes() {
        const UserData = getLocalStorage('loginData');
        dishService.getFavouriteDish(UserData.userId).then((favData) => {
            setFavouriteDishData(favData.favouriteDishes)
        })
    }

    const handleAddCart = () => {
        setShowAddCart(!showAddCart);
        setQuantity(quantity + 1);
    }
    useEffect(() => {
        if (quantity === 0) {
            setShowAddCart(true);
        }
    }, [quantity]);


    useEffect(() => {
        getFavouriteDishes()

    }, [])

    return (

        <div className="grid grid-cols-2 gap-6 mx-auto w-[1000px]" >
            {
                FavouriteDishData.map((favourite) => {
                    return (

                        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg  " key={favourite._id}>
                            <img className="w-full" src={favourite.imgUrl} alt="Sunset in the mountains" />
                            <div className=" flex flex-col gap-2 px-6 py-4">
                                <div className="font-bold text-xl mb-2">{favourite.dishName}</div>
                                <div className="flex flex-col">
                                    <div className="flex gap-1">
                                        <div className="font-bold text-[#D11243]">MRP:&#8377;{favourite.price} </div>
                                        <div className="text-gray-700"><del>&#8377;{favourite.price}</del></div>
                                    </div>

                                    <div className="text-gray-600">{favourite.description}</div>
                                </div>

                                <div className=" border-t-2 rounded pt-3 flex gap-2">

                                    {
                                        showAddCart ?
                                            <button onClick={() => handleAddCart()} className="bg-[#D11243] hover:bg-green-700 text-white  py-2 px-4 border  rounded-md ">
                                                Add Cart
                                            </button> :
                                            <div className="flex gap-2">
                                                <button onClick={() => setQuantity(quantity - 1)} className="bg-[#D11243] hover:bg-green-700 text-white   py-1 px-3.5 border  rounded-full">
                                                    -
                                                </button>
                                                <div className="text-pink-700">{quantity}</div>
                                                <button onClick={() => setQuantity(quantity + 1)} className="bg-[#D11243]  hover:bg-green-700 text-white  py-1 px-3 border  rounded-full">
                                                    +
                                                </button>
                                            </div>
                                    }
                                </div>
                            </div>


                        </div>
                    )

                })
            }


        </div>


    )
}