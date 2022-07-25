import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DishDetails(props) {
    let [dishData, setDishData] = useState({})
    const params = useParams()

    useEffect(() => {
        getDish();
    }, [])

    function getDish() {
        fetch(`http://cf8a-2405-201-401a-dd3e-4d2d-28b9-2bc3-722f.ngrok.io/dishes/${params.dishId}`)
            .then(res => res.json())
            .then((response) => {
                if (response && response.payload) {
                    setDishData(response.payload)
                }
            }, (error) => {
                console.log(error)
            })
    }

    return (
        <div>
            <div className="flex gap-4">
                <div className="flex ">
                    <img className="max-h-[32rem] " src={dishData.imgUrl}></img>
                </div>
                <div className="flex flex-col justify-evenly">
                    <div className="flex flex-col gap-1">
                        <div className="text-3xl">{dishData.energy}</div>
                        <div className="text-gray-400 text-xs">ENERGY(KCAL)</div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <div className="text-3xl">{dishData.fat}</div>
                        <div className="text-gray-400 text-xs">FAT(g)</div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <div className="text-3xl">{dishData.carbs}</div>
                        <div className="text-gray-400 text-xs">CARBS(g)</div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <div className="text-3xl">{dishData.fiber}</div>
                        <div className="text-gray-400 text-xs">FIBER(g)</div>
                    </div>

                    <div className="flex flex-col gap-1">
                        <div className="text-2xl">{dishData.protein}</div>
                        <div className="text-gray-400 text-xs">PROTIEN(g)</div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <div>
                            <button type="submit" className="inline-block px-2 py-1.5 bg-green-500 text-white font-medium text-l 
leading-tight  rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg 
focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition duration-150 ease-in-out">Price: 400</button>

                        </div>
                        <div>
                            <button type="submit" className=" px-1.5 py-1.5 bg-green-700 text-white text-xs 
leading-tight  rounded-full shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg 
focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition duration-150 ease-in-out">Discount Price</button>

                        </div>
                    </div>
                </div>
            </div>

            <div className="flex gap-3 mt-4 ml-4">
                <div className="font-medium leading-tight text-3xl  mb-2 text-slate-700">{dishData.dishName}</div>
                <div className="">&#9989;</div>
            </div>
            <div>
                <button type="submit" className="inline-block px-3 ml-4 py-1 bg-green-700 text-white  text-xs 
leading-tight  rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg 
focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition duration-150 ease-in-out">ADD</button>

            </div>
            <div className="text-gray-500 text-xs ml-4 mt-3">{dishData.description}</div>


        </div>

    )
}

export default DishDetails;