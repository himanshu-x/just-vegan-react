import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import OfferService from "../services/OfferService";

function OfferDetails(props) {
    let [offerData, setOfferData] = useState({})
    const params = useParams()

    useEffect(() => {
        getOffer();
    }, [])

    function getOffer() {

        OfferService.getOffer(params.offerId).then((offer) => {
            setOfferData(offer)

        })

        // fetch(`http://cf8a-2405-201-401a-dd3e-4d2d-28b9-2bc3-722f.ngrok.io/offers/${params.offerId}`)
        //     .then(res => res.json())
        //     .then((response) => {
        //         if (response && response.payload) {
        //             setOfferData(response.payload)
        //         }
        //     }, (error) => {
        //         console.log(error)
        //     })
    }

    return (
        <div className="flex flex-col gap-3 w-full sm:w-fit sm:bg-slate-100  bg-slate-100 container  ">
            <div className="grid sm:grid-cols-1 lg:grid-cols-2 w-full ">
                <img className="max-h-xl sm:w-full " src={offerData.imgUrl}></img>
                <div className="flex flex-col justify-center sm:w-full ml-3 gap-3">
                    <div className=" text-sm text-black-700"><b>OFFER DETAILS :</b></div>
                    <div className=" text-4xl text-pink-600">{offerData.offerName}</div>
                    <div className=" text-xl text-red-300">code: {offerData.offerCode}</div>
                    <div>
                        <p className="font-medium"><b>Condition:</b></p>
                        <ul className="list-disc ml-8">
                            <li>{offerData.offerConditions}</li>
                            <li>Max Discount :<b>&#x20b9;{offerData.maxDiscount}</b> </li>
                            <li>Min Purchase :<b>&#x20b9;{offerData.minPurchase}</b></li>
                            <li>Discount Amount : <b>&#x20b9;{offerData.discountAmount}</b></li>
                            <li>Discount Percent :<b>&#x20b9;{offerData.discountPercent}</b></li>
                        </ul>
                    </div>
                    <div className="text-2xl text-blue-600 font-bold">{offerData.offerDescription}</div>

                    <div>
                        <button type="button" className="inline-block px-6 py-2.5 bg-teal-600 text-white font-medium text-l 
leading-tight uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg 
focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition duration-150 ease-in-out">Activate Now</button>

                    </div>

                </div>
            </div>
            <div className="">
                <Link to='' className=" text-red-300 px-5 py-5 rounded-md text-xl font-medium">
                    THIS IS A LINK
                </Link>
            </div>

        </div>

    )
}

export default OfferDetails;