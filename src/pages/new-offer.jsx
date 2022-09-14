import React from 'react';
import OfferService from '../services/OfferService';

export default class newOffer extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            headerText: 'New Offer Card',
            offerModel: {
                offerName: '',
                offerCode: '',
                imgUrl: '',
                offerCondition: '',
                offerDescription: '',
                maxDiscount: null,
                minPurchase: null,
                discountAmount: null,
                discountPercent: null,
                isActive: false,
            }

        }

    }

    // person = { name: "Vishal" };

    handleSubmit = (event) => {
        event.preventDefault();
        const { offerModel } = this.state;

        OfferService.createNewOffer(offerModel).then((createOfferCard) => {
            console.log(createOfferCard)
            if (createOfferCard && createOfferCard._id) {


                alert('New offer with offer id ${createResult._id} has been created.')

            }

            // fetch('http://cf8a-2405-201-401a-dd3e-4d2d-28b9-2bc3-722f.ngrok.io/offers', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify(offerModel),
            // })
            //     .then((response) => response.json())
            //     .then((response) => {
            //         console.log(response)
            //         console.log('Success:', response);
            //     })
            //     .catch((error) => {
            //         console.error('Error:', error);
            //     });

        })
    }

    onInputChange = (event) => {

        const { value: newValue, name: fieldName } = event.target;
        const { offerModel } = this.state;
        // offerModel[fieldName] = newValue;

        let newIntValue = '';

        // const numberFields = ['maxDiscount', 'minPurchase', 'discountAmount']
        // if (numberFields.includes(fieldName)) {
        //     newIntValue = parseFloat(newValue)
        // }

        // if (fieldName === 'maxDiscount' || fieldName === 'minPurchase' || fieldName === 'discountAmount' || fieldName === 'discountPercent') {
        //     newIntValue = parseFloat(newValue)
        // }


        switch (fieldName) {
            case 'maxDiscount':
                newIntValue = parseFloat(newValue);
                break;
            case "minPurchase":
                newIntValue = parseFloat(newValue);
                break;
            case "discountAmount":
                newIntValue = parseFloat(newValue);
                break;
            case "discountPercent":
                newIntValue = parseFloat(newValue);
                break;


        }

        // console.log(`newValue`)
        // console.log(newValue)
        this.setState({
            offerModel: {
                ...offerModel,
                [fieldName]: newIntValue ? newIntValue : newValue
            }
        })
    }

    handleChange = (e) => {
        const { value: newValue, name: fieldName } = e.target;
        const { offerModel } = this.state;
        offerModel[fieldName] = newValue

        this.setState({
            ...offerModel,
            [fieldName]: newValue
        })

    }



    render() {
        const { headerText } = this.state
        return (
            <div className='my-4 p-8 rounded-lg shadow-lg mx-auto max-w-7xl' >
                <p className="font-medium leading-tight text-4xl mt-0 mb-2 text-slate-600 ">{headerText}</p>
                <form className="m-4 flex flex-col gap-6" onSubmit={this.handleSubmit}>


                    <div className='flex flex-col gap-3'>
                        <div className="flex flex-col gap-2">

                            <label htmlFor="offerName" className="text-sm text-slate-600">Offer Name*</label>

                            <input type="text" className=" border  px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
          rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:outline-none" id="offerName" name="offerName"
                                placeholder="Offer Name" onInput={this.onInputChange} />
                        </div>
                        <div className="flex flex-col gap-2">

                            <label htmlFor="offerCode" className="text-sm text-slate-600">Offer Code*</label>

                            <input type="text" className=" border  px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
          rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:outline-none" id="offerCode" name="offerCode"
                                placeholder="Offer code" onInput={this.onInputChange} />
                        </div>
                    </div>


                    <div className='flex flex-col gap-3 '>
                        <div className="font-medium leading-tight text-2xl mt-0 mb-2 text-slate-600">IsActive</div>
                        <div className="flex gap-2">
                            <div className="form-check form-check-inline">
                                <input className="form-check-input  appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600
     checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                    type="radio" name="isActive" id="active" value="true" onInput={this.handleChange} />
                                <label className="form-check-label inline-block text-gray-800" htmlFor="active">Active</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input  appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white
     checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                    type="radio" name="isActive" id="nonActive" value="false" onInput={this.handleChange} />
                                <label className="form-check-label inline-block text-gray-800" htmlFor="nonActive">Non Active</label>
                            </div>

                        </div>
                    </div>


                    <div className='grid grid-cols-2 grid-rows-2 gap-6 '>
                        <div className="flex flex-col gap-2">

                            <label htmlFor="maxDiscount" className="text-sm text-slate-600">Max Discount</label>

                            <input type="text" className=" border  px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:outline-none" id="maxDiscount" name="maxDiscount"
                                placeholder="Max Discount" onInput={this.onInputChange} />
                        </div>
                        <div className="flex flex-col gap-2">

                            <label htmlFor="minPurchase" className="text-sm text-slate-600">Min Purchase</label>

                            <input type="text" className=" border  px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:outline-none" id="minPurchase" name="minPurchase"
                                placeholder="Min Purchase" onInput={this.onInputChange} />
                        </div>
                        <div className="flex flex-col gap-2">

                            <label htmlFor="discountAmount" className="text-sm text-slate-600">Discount Amount</label>

                            <input type="text" className=" border  px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:outline-none" id="discountAmount" name="discountAmount"
                                placeholder="Discount Amount" onInput={this.onInputChange} />
                        </div>
                        <div className="flex flex-col gap-2">

                            <label htmlFor="discountPercent" className="text-sm text-slate-600">Discount Percent</label>

                            <input type="text" className=" border  px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:outline-none" id="discountPercent" name="discountPercent"
                                placeholder="Discount Percent" onInput={this.onInputChange} />
                        </div>

                    </div>

                    <div className="flex flex-col gap-3">

                        <label htmlFor="offerDescription" className="text-sm text-slate-600">Offer Description</label>

                        <input type="text" className=" border  px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:outline-none" id="offerDescription" name="offerDescription"
                            placeholder="Offer Description" onInput={this.onInputChange} />
                    </div>
                    <div className="flex flex-col gap-3">

                        <label htmlFor="offerCondition" className="text-sm text-slate-600">Offer Condition</label>

                        <input type="text" className=" border  px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:outline-none" id="offerCondition" name="offerCondition"
                            placeholder="Offer Condition" onInput={this.onInputChange} />
                    </div>
                    <div className="flex flex-col gap-3">

                        <label htmlFor="imgUrl" className="text-sm text-slate-600">Img Url</label>

                        <input type="text" className=" border  px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:outline-none" id="imgUrl" name="imgUrl"
                            placeholder="Img Url" onInput={this.onInputChange} />
                    </div>
                    <div>
                        <button type="submit" className="inline-block px-6 py-2.5 bg-teal-600 text-white font-medium text-l 
leading-tight uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg 
focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition duration-150 ease-in-out">Submit &#10148;</button>

                    </div>
                </form>
            </div>

        )
    }
}