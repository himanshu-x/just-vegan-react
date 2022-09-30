import React, { useState, useEffect } from "react";
import HeadingCard from '../pages/headingCards'
import Carousel from "../components/base-components/base-carousel/carousel";

function Home() {
    const [homeHeading, setHomeHeading] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setHomeHeading(!homeHeading)
        }, [2000]);

    }, [])

    return (
        <div>

            <div className="home-bg  object-cover bg-cover">

                {
                    homeHeading && <span className="absolute text-white lg:text-green-600 top-40  left-6  lg:left-8 lg:top-60  font-semibold  text-2xl md:text-3xl lg:text-5xl "> Nothing  Tastes
                        <br></br>   as Good as Vegan Feels</span>
                }

            </div>
            <HeadingCard />
            <Carousel />
        </div>


    )
}
export default Home