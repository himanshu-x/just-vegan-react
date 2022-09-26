import React from "react";
import { Link } from "react-router-dom";
import BaseButton from "../components/base-components/base-button/BaseButton";


export default function HeadingCard() {

    return (
        <div className="max-w-[1400px] mx-auto p-4 py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link to='/dishes'> <div className="rounded-xl relative hover:scale-105 hover:duration-500 ">
                <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
                    <p className="font-bold text-2xl px-2 pt-4 text-green-500">New Dishes</p>
                    <p className=" text-xl px-2"> <em> Click Now</em></p>
                    <BaseButton className="absolute bottom-0 left-2" variant="primary">Click Now</BaseButton>
                </div>
                <img className="max-h-[160px] md:max-h-[250px] w-full object cover rounded-xl" src="https://images.unsplash.com/photo-1598449426314-8b02525e8733?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dmVnZXRhcmlhbiUyMGZvb2R8ZW58MHx8MHx8&w=1000&q=80" alt="food cards" />
            </div></Link>

            <Link to='/offers'> <div className="rounded-xl relative hover:scale-105 hover:duration-500 ">
                <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
                    <p className="font-bold text-2xl px-2 pt-4 text-green-500">New Offers</p>
                    <p className=" text-xl px-2"> <em> Click Now</em></p>
                    <BaseButton className="absolute bottom-0 left-2" variant="primary">Click Now</BaseButton>
                </div>
                <img className="max-h-[160px] md:max-h-[250px] w-full object cover rounded-xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN0M7lbmmXMe8vSAQPqZCdsWU9Du3gjcK_pQ&usqp=CAU" alt="food cards" />
            </div></Link>
            <Link to='/special-dish'> <div className="rounded-xl relative hover:scale-105 hover:duration-500">
                <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
                    <p className="font-bold text-2xl px-2 pt-4 text-green-500">Today's Special Dish</p>
                    <p className=" text-xl px-2 text-white "><em>OFF 80%   Click Now</em></p>
                    <BaseButton className="absolute bottom-0 left-2" variant="primary">Click Now</BaseButton>
                </div>
                <img className="max-h-[160px] md:max-h-[250px] w-full object cover rounded-xl" src=" https://images.unsplash.com/photo-1631311695255-8dde6bf96cb5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dmVnYW4lMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="food cards" />
            </div>
            </Link>
        </div>
    )
}