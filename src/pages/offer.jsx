import React from "react";
import { Link } from "react-router-dom";


export default class newOffer extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            offerList: [],

        }
    }


    getoffer() {
        fetch('https://b59b-2405-201-401a-dd3e-40f0-f1d9-c63e-76c9.ngrok.io/offers')
            .then(res => res.json())
            .then((response) => {
                console.log(response)
                this.setState({
                    offerList: response.payload

                })
            }, (error) => {
                console.log(error)

            })
    }

    componentDidMount() {
        this.getoffer();
    }


    componentDidUpdate() {
        console.log('component did updated called');
    }

    componentWillUnmount() {
        console.log('component will unmount called');
    }

    render() {

        const { offerList } = this.state;


        return (
            <div className="m-6">

                <h2 className="text-2xl font-semibold tracking-tight text-gray-900">OFFERS</h2>
                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 ">
                    {

                        offerList.map((offer) => {

                            return (

                                <div className="flex flex-col gap-3 border p-2 shadow-xl">
                                    <div>
                                        <img className="w-full h-full object-center object-cover  lg:w-full lg:h-full " src={offer.imgUrl}></img>
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
}