import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function DishCard(props) {
    // console.log('DishCard component called');
    let [cardState, setCardState] = useState({
        isOverImage: false,
        counter: 0
    })

    // const [isOverImage] = useState(true);
    // const [counter, setCounter] = useState(0);

    useEffect(() => {

    }, []);

    const { dish } = props

    console.log(`DishCard dish ${dish.dishName}`);

    let imgClass = 'w-full h-full object-center object-cover lg:w-full lg:h-full rounded-2xl'
    if (cardState.isOverImage) {
        imgClass = imgClass + 'origin-center rotate-45'
    }

    // const onImageMouseOver = () => {
    //     // console.log('onImageMouseOver')
    //     // setCounter(counter+1);
    //     // setCardState({
    //     //     ...cardState,
    //     //     isOnImage: true
    //     // });
    // }

    // const onImageMouseOut = () => {
    //     // setCardState({
    //     //     ...cardState,
    //     //     isOverImage: false
    //     // });
    // }

    return (
        <div className="flex flex-col gap-3 border rounded p-2 shadow-xl" key={'dish-' + dish._id}>
            <Link to={'/dishes/' + dish._id}>
                <img className={imgClass} src={dish.imgUrl}></img>
            </Link>

            <div className="flex gap-2">
                <div>{dish.dishName}</div>
                <div>{<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="#e11d48" viewBox="0 0 24 24"  >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>}</div>
            </div>
            <div className="flex flex-col">
                <div className="flex gap-1">
                    <div className="font-bold">&#8377;{dish.price} </div>
                    <div className="text-gray-700"><del>&#8377;{dish.price}</del></div>
                </div>

                <div className="text-gray-600">{dish.description}</div>
            </div>
            <div className=" border-t-2 rounded pt-3">
                <button className="bg-emerald-600  hover:bg-green-700 text-white  py-1 px-4 border  rounded-md">
                    ADD
                </button>
                <b>
                    {cardState.counter}
                </b>
            </div>
        </div>
    )
}

export default DishCard