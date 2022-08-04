import React from "react";


export default function Auth() {

    const veganImg = {
        backgroundImage: "url('https://media.istockphoto.com/photos/vegan-word-on-wood-background-and-vegetable-picture-id598708582?k=20&m=598708582&s=612x612&w=0&h=af_EqjtCEsntsmAap5i2cR1Zn1fRsKvGRNLyBBIUR4E=')"

    }

    return (
        <div className="container my-4 p-8 rounded-lg shadow-lg mx-auto w-2/4 flex content-around  ">
            <div className="w-96 basis-1/2 "><img className="rounded-xl" src="https://images.news18.com/ibnlive/uploads/2021/12/vegan-diet.jpg" alt="new" ></img>
            </div>
            <div className="flex flex-col justify-center items-center basis-1/2 justify-evenly">

                <div><button type="submit" className="inline-block px-12 py-5 bg-teal-600 text-white font-medium text-xl 
                    leading-tight uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg 
                    focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition duration-150 ease-in-out">Login</button>
                </div>
                <div>
                    <p>Or</p>
                </div>

                <div><button type="submit" className="inline-block px-10 py-5 bg-teal-600 text-white font-medium text-xl 
                    leading-tight uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg 
                    focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition duration-150 ease-in-out">Sign-Up</button>
                </div>

            </div>


        </div>
    )
} 