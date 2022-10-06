import React, { useEffect, useState } from "react";
import DishCartContext from "../../contexts/dish-cart/DishCart.Context";
import { useParams } from "react-router-dom";
import dishService from '../../services/dishService'
import BaseButton from "../../components/base-components/base-button/BaseButton";


function DishDetails() {
    let [dishData, setDishData] = useState({});
    const params = useParams()

    const dishProperties = [
        { valueKey: 'energy', displayKey: 'ENERGY : ', displayValue: "(KCAL)" },
        { valueKey: 'fat', displayKey: 'FAT : ', displayValue: "(g)" },
        { valueKey: 'carbs', displayKey: 'CARBS : ', displayValue: "(g)" },
        { valueKey: 'fiber', displayKey: 'FIBER : ', displayValue: "(g)" },
        { valueKey: 'protein', displayKey: 'PROTIEN : ', displayValue: "(g)" },
    ]

    const renderCardButtons = ({ cartDishes, addDishToCart, removeDishFromCart }) => {
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
                    <button onClick={() => { removeDishFromCart(dishData) }} className="bg-[#D11243] hover:bg-green-700 text-white   py-1 px-3.5 border  rounded-full">
                        -
                    </button>
                    <div className="text-pink-700">{currentQuantity}</div>
                    <button onClick={() => { addDishToCart(dishData) }} className="bg-[#D11243]  hover:bg-green-700 text-white  py-1 px-3 border  rounded-full">
                        +
                    </button>
                </div>
                :
                <BaseButton onClick={() => { addDishToCart(dishData) }}
                    variant="secondary">Add Cart </BaseButton>
        )
    }

    function getDish() {
        dishService.getDish(params.dishId).then((Dish) => {
            setDishData(Dish)
        })
    }

    useEffect(() => {
        getDish();
    }, [])
    return (

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
                            <li className="flex gap-2">
                                <span className=" py-1 text-sm font-semibold text-gray-700">{prop.displayKey}  <span className="text-gray-400">{dishData[prop.valueKey]}{prop.displayValue}</span></span>
                            </li>
                        )

                    })}
                </ul>
                <div className="flex gap-1">
                    <div className="font-bold text-[#D11243]">MRP:&#8377;{dishData.price} </div>
                    <div className="text-gray-700"><del>&#8377;{dishData.price}</del></div>
                </div>
                <DishCartContext.Consumer >
                    {
                        (ctx) => (
                            <div className=" border-t-2 rounded pt-3 flex gap-2">
                                {renderCardButtons(ctx)}
                            </div>
                        )
                    }
                </DishCartContext.Consumer >
                {/* <div className=" border-t-2 rounded pt-3 flex gap-2">

                    {
                        showAddCart ?
                            <BaseButton onClick={() => handleAddCart()} variant="secondary">Add Cart </BaseButton>
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
                </div> */}
            </div>
        </div>

    )
}

export default DishDetails;