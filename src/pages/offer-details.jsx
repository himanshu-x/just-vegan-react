import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function OfferDetails(props) {
    let [offerData, setOfferData] = useState({})
    const params = useParams()

    useEffect(() => {
        getOffer();
    }, [])

    function getOffer() {
        fetch(`http://cf8a-2405-201-401a-dd3e-4d2d-28b9-2bc3-722f.ngrok.io/dishes/${params.offerId}`)
            .then(res => res.json())
            .then((response) => {
                if (response && response.payload) {
                    setOfferData(response.payload)
                }
            }, (error) => {
                console.log(error)
            })
    }

    return (
        <div>
            <h1>{offerData.message}</h1>
        </div>

    )
}

export default OfferDetails;