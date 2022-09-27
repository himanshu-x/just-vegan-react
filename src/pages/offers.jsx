import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import offerService from "../services/OfferService"


export default function Offers() {

    const [offerList, setOfferList] = useState([]);

    const getoffers = () => {
        offerService.getOffers().then((offers) => {
            setOfferList(offers)
        })
    }

    useEffect(() => {
        getoffers();
    }, [])


    return (
        <div className="m-6 ">

            <h2 className="text-2xl font-semibold tracking-tight text-gray-900">OFFERS</h2>
            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 ">
                {

                    offerList.map((offer) => {

                        return (

                            <div className="flex flex-col gap-3 border p-2 shadow-xl sm:hover:scale-105  hover:scale-105  duration-300" key={'offer-' + offer._id}>
                                <div >
                                    <Link to={'/offers/' + offer._id}>
                                        <img className=" object-center object-cover  w-full max-h-[350px] min-h-[300px] " src={offer.imgUrl}></img>
                                    </Link>
                                </div>
                                <div>
                                    <p className="text-2xl text-blue-400">{offer.offerName}</p>
                                </div>
                                <div>
                                    <p>offerCode: {offer.offerCode}</p>
                                    <p>{offer.offerDescription}</p>
                                    <p>Min Purchase:{offer.minPurchase}</p>
                                    <p>Max Discount :{offer.maxDiscount}</p>
                                    <p className="">Dis.Percent:{offer.discountPercent}</p>
                                </div>
                                <div className="border-t-2 pt-2">
                                    <Link to='' className=" text-red-300 px-3 py-2 rounded-md text-sm font-medium">
                                        THIS IS A LINK
                                    </Link>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
