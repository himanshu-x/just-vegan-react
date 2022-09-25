import React, { useEffect, useState } from "react";
import { useParams, useLocation, useSearchParams } from "react-router-dom";
import dishService from '../services/dishService'
import BaseButton from "../components/base-components/base-button/BaseButton";

function DishDetails(props) {
    let [dishData, setDishData] = useState({})
    const params = useParams()

    const dishProperties = [
        { valueKey: 'energy', displayKey: 'ENERGY : ', displayValue: "(KCAL)" },
        { valueKey: 'fat', displayKey: 'FAT : ', displayValue: "(g)" },
        { valueKey: 'carbs', displayKey: 'CARBS : ', displayValue: "(g)" },
        { valueKey: 'fiber', displayKey: 'FIBER : ', displayValue: "(g)" },
        { valueKey: 'protein', displayKey: 'PROTIEN : ', displayValue: "(g)" },
    ]

    useEffect(() => {
        getDish();
    }, [])

    function getDish() {


        dishService.getDish(params.dishId).then((Dish) => {
            setDishData(Dish)

        })

        // fetch(`http://cf8a-2405-201-401a-dd3e-4d2d-28b9-2bc3-722f.ngrok.io/dishes/${params.dishId}`)
        //     .then(res => res.json())
        //     .then((response) => {
        //         if (response && response.payload) {
        //             setDishData(response.payload)
        //         }
        //     }, (error) => {
        //         console.log(error)
        //     })
    }



    return (
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 w-full">
            <img className="mx-auto w-[500px]" src={dishData.imgUrl}></img>
            <div className="flex p-2 flex-col justify-evenly">
                <div className="flex flex-col    ">
                    <div className="flex">
                        <div className="font-medium leading-tight text-3xl  text-slate-700">{dishData.dishName}</div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-emerald-600" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                    </div>

                    <div className="text-gray-500 text-md">{dishData.description}</div>
                </div>
                <ul>
                    {dishProperties.map((prop, index) => {

                        return (
                            <div>
                                <li className="flex gap-1">
                                    <div className="text-2xl">{prop.displayKey}{dishData[prop.valueKey]}</div>
                                    <div className="text-sm">{prop.displayValue}</div>

                                </li>

                            </div>
                        )

                    })}
                </ul>
                <div className="flex gap-1">
                    <div className="font-bold text-[#D11243]">MRP:&#8377;{dishData.price} </div>
                    <div className="text-gray-700"><del>&#8377;{dishData.price}</del></div>
                </div>
                <BaseButton type="submit" className="px-4 py-2 w-fit" variant="secondary">ADD </BaseButton>
            </div>
        </div>
    )
}

export default DishDetails;