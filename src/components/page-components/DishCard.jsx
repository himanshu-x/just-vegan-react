import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import dishService from "../../services/dishService";
import { getLocalStorage } from "../../utils/common.util"


export default function DishCard(props) {
    const { dish, userData } = props
    const [isFavouriteDish, setIsFavouriteDish] = useState(false);
    const [quantity, setQuantity] = useState(0);
    const [showAddCart, setShowAddCart] = useState(true)
    const loginData = getLocalStorage('loginData');


    const handleAddCart = () => {
        setShowAddCart(!showAddCart);
        setQuantity(quantity + 1);
    }

    // useEffect(() => {
    //m-1
    // if (userData && dish && userData.favouriteDishes) {
    // for (let i = 0; i < userData.favouriteDishes.length; i++) {
    //     const favDish = userData.favouriteDishes[i];
    //     if (favDish._id === dish._id) {
    //         setIsFavouriteDish(true)
    //         break;
    //     } else {
    //         setIsFavouriteDish(false)
    //     }
    // }

    // m-2 
    // const hasFound = ------- ;using find function
    // if hasFound set isFavouriteDish to true else false
    useEffect(() => {
        if (userData && dish && userData.favouriteDishes) {
            const hasFound = userData['favouriteDishes'].find(favDish => {
                return (favDish._id === dish._id)
            })
            if (hasFound) {
                setIsFavouriteDish(true)
            } else {
                setIsFavouriteDish(false)
            }
        } else {
            setIsFavouriteDish(false)
        }
    }, [userData])

    useEffect(() => {
        if (quantity === 0) {
            setShowAddCart(true);
        }
    }, [quantity]);

    const onHeartClick = (event) => {
        event.preventDefault();
        if (isFavouriteDish) {
            removeFavouriteDish();
        } else {
            addFavouriteDish();
        }
        // setisFavouriteDish(!isFavouriteDish)
    }

    function removeFavouriteDish() {
        dishService.removeFavouriteDish(dish._id, loginData.userId).then((favouriteDishId) => {
            console.log(favouriteDishId)
            const { reFetchUser } = props
            reFetchUser();
        })
    }

    function addFavouriteDish() {
        console.log(dish);
        dishService.addFavouriteDish(dish._id, loginData.userId).then((favouriteDishId) => {
            console.log(favouriteDishId)
            const { reFetchUser } = props
            reFetchUser();
            // setFavouriteDishList(favouriteDishId)
        })
    }


    let imgClass = 'w-full h-full object-center object-cover lg:w-full lg:h-full rounded-2xl'


    return (


        <div className="flex flex-col gap-3 border rounded p-2 shadow-xl" key={'dish-' + dish._id}>
            <Link to={'/dishes/' + dish._id}>
                <img className={imgClass} src={dish.imgUrl}></img>
            </Link>

            <div className="flex gap-2">
                <div>{dish.dishName}</div>

                <button onClick={onHeartClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" name="favourite" fill={isFavouriteDish ? 'green ' : 'none'} className="h-6 w-6" viewBox="0 0 24 24"
                        stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>
                </button>

            </div>
            <div className="flex flex-col">
                <div className="flex gap-1">
                    <div className="font-bold text-[#D11243]">MRP:&#8377;{dish.price} </div>
                    <div className="text-gray-700"><del>&#8377;{dish.price}</del></div>
                </div>

                <div className="text-gray-600">{dish.description}</div>
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



    )
}

