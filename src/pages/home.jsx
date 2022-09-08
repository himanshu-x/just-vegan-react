import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function Home() {
    const [homeHeading, setHomeHeading] = useState(false)

    useEffect(() => {
        setInterval(() => {
            setHomeHeading(!homeHeading)
        }, 2000);

    }, [])

    return (
        <div>
            <img className="w-full h-screen flex relative "
                src="https://foodandnutrition.org/wp-content/uploads/big-bowl-vegetables-1047798504-1-780x520.jpg"
                alt="new" ></img>

            {
                homeHeading && <span className="absolute text-teal-300 left-8 top-60  font-semibold text-5xl"> Nothing  Testes
                    <br></br>   as Good as Vegan Feels</span>

            }

        </div>

    )
}
export default Home