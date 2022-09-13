import React, { useState, useEffect } from "react";
import HeadingCard from '../pages/headingCards'

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
                    homeHeading && <span className="absolute text-teal-300 lg:left-8 lg:top-60  font-semibold  text-xl md:text-3xl  lg:text-5xl top-40  left-2"> Nothing  Tastes
                        <br></br>   as Good as Vegan Feels</span>
                }

            </div>
            <HeadingCard />
        </>


    )
}
export default Home