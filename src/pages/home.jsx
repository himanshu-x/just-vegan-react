import React, { useState, useEffect } from "react";
import HeadingCard from '../pages/headingCards'
import Cerousel from "../components/base-components/base-cerousel/cerousel";

function Home() {
    const [homeHeading, setHomeHeading] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setHomeHeading(!homeHeading)
        }, [2000]);

    }, [])

    return (
        <>

            <div className="home-bg">

                {
                    homeHeading && <span className="absolute text-green-600 lg:left-8 lg:top-60  font-semibold  text-xl md:text-3xl  lg:text-5xl top-40  left-2"> Nothing  Tastes
                        <br></br>   as Good as Vegan Feels</span>
                }

            </div>
            <HeadingCard />
            <Cerousel />
        </>


    )
}
export default Home