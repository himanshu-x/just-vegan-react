import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { addDishToCart, removeDishFromCart } from '../../features/dishCartSlice'
import { useParams } from "react-router-dom";
import dishService from '../../services/dishService'
import BaseButton from "../../components/base-components/base-button/BaseButton";



function DishDetails() {
    let [dishData, setDishData] = useState({});
    const params = useParams()

    const cartDishes = useSelector((state) => state.dishCart.cartDishes);
    const dispatch = useDispatch();

    const dishProperties = [
        { valueKey: 'energy', displayKey: 'ENERGY : ', displayValue: "(KCAL)" },
        { valueKey: 'fat', displayKey: 'FAT : ', displayValue: "(g)" },
        { valueKey: 'carbs', displayKey: 'CARBS : ', displayValue: "(g)" },
        { valueKey: 'fiber', displayKey: 'FIBER : ', displayValue: "(g)" },
        { valueKey: 'protein', displayKey: 'PROTIEN : ', displayValue: "(g)" },
    ]

    const renderCardButtons = () => {
        // console.log(`Dish card caallled ${dish.dishName}`)

        let matchedCartDish;
        if (cartDishes && cartDishes.length) {
            matchedCartDish = cartDishes.find((cDish) => cDish._id === dishData._id)
        }
        // const currentQuantity = matchedCartDish?.quantity || 0;
        const currentQuantity = matchedCartDish && matchedCartDish.quantity ? matchedCartDish.quantity : 0;
        return (
            currentQuantity ?
                <div className="flex gap-2">
                    <button onClick={() => { dispatch(removeDishFromCart(dishData)) }} className="bg-[#D11243] hover:bg-green-700 text-white   py-1 px-3.5 border  rounded-full">
                        -
                    </button>
                    <div className="text-pink-700">{currentQuantity}</div>
                    <button onClick={() => { dispatch(addDishToCart(dishData)) }} className="bg-[#D11243]  hover:bg-green-700 text-white  py-1 px-3 border  rounded-full">
                        +
                    </button>
                </div>
                :
                <BaseButton onClick={() => { dispatch(addDishToCart(dishData)) }} variant="secondary">
                    Add Cart
                </BaseButton>
        )
    }

    function getDish() {
        dishService.getDish(params.dishId).then((Dish) => {
            // console.log(Dish)
            setDishData(Dish)
        })
    }

    useEffect(() => {
        getDish();
    })

    return (

        <Fragment>




            <div className=" grid grid-cols-1 md:grid-cols-2 max-w-[1000px] lg:max-h-[500px] object-center object-coverbg-cover m-4 md:mx-auto rounded-md overflow-hidden shadow-lg ">
                <img className="w-full rounded-xl" src={dishData.imgUrl} alt="Sunset in the mountains" />
                <div className="px-6 py-4 flex flex-col gap-4">
                    <div>
                        <div className="font-bold text-3xl ">{dishData.dishName}</div>
                        <p className="text-gray-700">{dishData.description}</p>
                    </div>

                    <ul>
                        {dishProperties.map((prop, index) => {

                            return (
                                <li key={index} className="flex gap-2">
                                    <span className=" py-1 text-sm font-semibold text-gray-700">{prop.displayKey}  <span className="text-gray-400">{dishData[prop.valueKey]}{prop.displayValue}</span></span>
                                </li>
                            )

                        })}
                    </ul>
                    <div className="flex gap-1">
                        <div className="font-bold text-[#D11243]">MRP:&#8377;{dishData.price} </div>
                        <div className="text-gray-700"><del>&#8377;{dishData.price}</del></div>
                    </div>

                    <div className=" border-t-2 rounded pt-3 flex gap-2">
                        {renderCardButtons()}
                    </div>


                </div>
            </div>
        </Fragment>
    )
}

export default DishDetails;