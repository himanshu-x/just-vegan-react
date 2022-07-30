import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



// function ListDishProperties(props) {
//     return(
//         <div className="flex flex-col gap-1">
//                         <div className="text-3xl">{props.fiber}</div>
//                         <div className="text-gray-400 text-xs">FIBER(g)</div>
//                     </div>
//     )
// }

function DishDetails(props) {
    let [dishData, setDishData] = useState({})
    const params = useParams()

    const dishProperties = [
        { valueKey: 'energy', displayKey: 'ENERGY(KCAL)' },
        { valueKey: 'fat', displayKey: 'FAT(g)' },
        { valueKey: 'carbs', displayKey: 'CARBS(g)' },
        { valueKey: 'fiber', displayKey: 'FIBER(g)' },
        { valueKey: 'protein', displayKey: 'PROTIEN(g)' },
    ]

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
        <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex p-2 mx-auto">
                    <img className="w-full p-4 object-center object-cover " src={dishData.imgUrl}></img>
                </div>
                <div className="flex p-2 flex-col justify-evenly">
                    <div className="flex flex-col  mt-4 ml-4   ">
                        <div className="flex">
                            <div className="font-medium leading-tight text-3xl  mb-2 text-slate-700">{dishData.dishName}</div>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-emerald-600" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>
                        </div>

                        <div className="text-gray-500 text-xs  mt-3">{dishData.description}</div>
                    </div>



                    <ul>
                        {dishProperties.map((prop, index) => {

                            return (
                                <li className="flex flex-col gap-1">
                                    <div className="text-3xl">{dishData[prop.valueKey]}</div>
                                    <div className="text-gray-400 text-xs">{prop.displayKey}</div>
                                </li>
                            )

                        })}
                    </ul>
                    {/* <div className="flex flex-col gap-1">
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
                    </div> */}
                    <div className="flex flex-col gap-1">
                        <div>
                            <button type="submit" className="inline-block px-2 py-1.5 bg-green-500 text-white font-medium text-l 
leading-tight  rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg 
focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition duration-150 ease-in-out">ADD</button>

                        </div>
                        <div>
                            <button type="submit" className="inline-block px-2 py-1.5 bg-green-500 text-white font-medium text-l 
leading-tight  rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg 
focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition duration-150 ease-in-out">Price: 400</button>

                        </div>
                        <div>
                            <button type="submit" className="inline-block px-2 py-1.5 bg-green-500 text-white font-medium text-l 
leading-tight  rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg 
focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition duration-150 ease-in-out">Discount Price</button>

                        </div>
                    </div>
                </div>
            </div>




        </div>

    )
}

export default DishDetails;