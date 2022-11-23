import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'

import { addDishToCart, removeDishFromCart } from '../../features/dishCartSlice'
import { Link } from "react-router-dom";
import dishService from "../../services/dishService";
import { getLocalStorage } from "../../utils/common.util"
import BaseButton from "../base-components/base-button/BaseButton";
import BaseIcon from "../base-components/base-icon/BaseIcon";

export default function ReduxDishCard(props) {
    const dispatch = useDispatch();
    const { dish, userData } = props;
    const [isFavouriteDish, setIsFavouriteDish] = useState(false);
    const loginData = getLocalStorage('loginData');

    const cartDishes = useSelector((state) => state.dishCart.cartDishes);

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


    const onHeartClick = (event) => {
        event.preventDefault();
        if (isFavouriteDish) {
            removeFavouriteDish();
        } else {
            addFavouriteDish();
        }
    }
    function addFavouriteDish() {
        // console.log(dish);
        dishService.addFavouriteDish(dish._id, loginData.userId).then((favouriteDishId) => {
            console.log(favouriteDishId)
            const { reFetchUser } = props
            reFetchUser();

        })
    }

    function removeFavouriteDish() {
        dishService.removeFavouriteDish(dish._id, loginData.userId).then((removeFavouriteDishId) => {
            console.log(removeFavouriteDishId)
            // console.log(props)
            const { reFetchUser } = props
            reFetchUser();
        })
    }




    const renderCardButtons = () => {
        // console.log(`Dish card caallled ${dish.dishName}`)

        let matchedCartDish;
        if (cartDishes && cartDishes.length) {
            matchedCartDish = cartDishes.find((cDish) => cDish._id === dish._id)
        }
        // const currentQuantity = matchedCartDish?.quantity || 0;
        const currentQuantity = matchedCartDish && matchedCartDish.quantity ? matchedCartDish.quantity : 0;
        return (
            currentQuantity ?
                <div className="flex gap-2">
                    <button onClick={() => { dispatch(removeDishFromCart(dish)) }} className="bg-[#D11243] hover:bg-green-700 text-white   py-1 px-3.5 border  rounded-full">
                        -
                    </button>
                    <div className="text-pink-700">{currentQuantity}</div>
                    <button onClick={() => { dispatch(addDishToCart(dish)) }} className="bg-[#D11243]  hover:bg-green-700 text-white  py-1 px-3 border  rounded-full">
                        +
                    </button>
                </div>
                :
                <BaseButton onClick={() => { dispatch(addDishToCart(dish)) }}
                    variant="secondary">Add Cart </BaseButton>
        )
    }
    let imgClass = 'w-full max-h-[350px] min-h-[350px]  object-center object-cover  rounded-2xl'

    return (
        <div className="flex flex-col gap-3 border rounded p-2 shadow-xl" key={'dish-' + dish._id}>
            <Link to={'/dishes/' + dish._id}>
                <img className={imgClass} src={dish.imgUrl} alt="dish-images"></img>
            </Link>

            <div className="flex gap-2">
                <div>{dish.dishName}</div>

                {
                    isFavouriteDish ?
                        <BaseIcon className="text-rose-600 h-6 w-6" onClick={onHeartClick} iconName="solid-heart" />
                        :
                        <BaseIcon onClick={onHeartClick} iconName="heart" className="h-6 w-6" />

                }
            </div>
            <p>{dish.dishCategory}</p>
            <div className="flex flex-col">
                <div className="flex gap-1">
                    <div className="font-bold text-[#D11243]">MRP:&#8377;{dish.price} </div>
                    <div className="text-gray-700"><del>&#8377;{dish.price}</del></div>
                </div>

                <div className="text-gray-600">{dish.description}</div>
            </div>
            <div className=" border-t-2 rounded pt-3 flex gap-2">
                {renderCardButtons()}
            </div>
        </div>
    )
}