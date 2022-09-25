import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import dishService from "../../services/dishService";
import { getLocalStorage } from "../../utils/common.util"
import BaseButton from "../base-components/base-button/BaseButton";
import BaseIcon from "../base-components/base-icon/BaseIcon";

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

                {
                    isFavouriteDish ?
                        <BaseIcon className="text-rose-600 h-6 w-6" atClick={onHeartClick} iconName="solid-heart" />
                        :
                        <BaseIcon atClick={onHeartClick} iconName="heart" className="h-6 w-6" />

                }
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
                        <BaseButton atClick={() => handleAddCart()} variant="secondary">Add Cart </BaseButton>
                        :
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

