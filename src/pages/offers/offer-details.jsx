import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BaseButton from "../../components/base-components/base-button/BaseButton";
import OfferService from "../../services/OfferService";

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
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-[1000px] lg:mx-auto rounded-md overflow-hidden shadow-lg m-4">
            <img className="w-full rounded-xl" src={offerData.imgUrl} alt="Sunset in the mountains" />
            <div className="px-6 py-4 flex flex-col gap-4">
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="text-3xl font-semibold text-green-700">{offerData.offerName}</div>
                    <em className="text-pink-600 text-xl font-medium">( {offerData.offerCode} ) </em>
                </div>
                <div>
                    <p className="font-medium"><b>Condition:</b></p>
                    <ul className="list-disc ml-8">
                        <li>{offerData.offerConditions}</li>
                        <li className=" text-lg font-medium">Max Discount :<span className="text-gray-400"> &#x20b9;{offerData.maxDiscount} </span></li>
                        <li className=" text-lg font-medium">Min Purchase :<span className="text-gray-400"> &#x20b9;{offerData.minPurchase}</span></li>
                        <li className=" text-lg font-medium">Discount Amount : <span className="text-gray-400"> &#x20b9;{offerData.discountAmount}</span></li>
                        <li className=" text-lg font-medium">Discount Percent :<span className="text-gray-400"> {offerData.discountPercent}%</span></li>
                    </ul>
                </div>
                <BaseButton variant="secondary">Activate Now</BaseButton>
            </div>

        </div >

    )
}

export default OfferDetails;