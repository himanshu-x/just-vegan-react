import React from 'react';
import { useForm } from "react-hook-form";
import BaseButton from '../components/base-components/base-button/BaseButton';
import BaseInput from '../components/base-components/base-input/BaseInput';
import OfferService from '../services/OfferService';

export default function NewOffer() {

    const headerText = 'New Offer Card';
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        OfferService.createNewOffer(data).then((createOfferCard) => {
            console.log(createOfferCard)
            if (createOfferCard && createOfferCard._id) {
                alert(`New offer with offer id ${createOfferCard._id} has been created.`)
            }
        })
    }

    return (
        <div className='my-4 p-8 rounded-lg shadow-lg mx-auto max-w-7xl' >
            <p className="font-medium leading-tight text-4xl mt-0 mb-2 text-slate-600 ">{headerText}</p>
            <form className="m-4 flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>

                <div className='flex flex-col gap-3'>

                    <div className="flex flex-col gap-2">

                        <label htmlFor="offerName" className="text-sm text-slate-600">Offer Name*</label>

                        <input type="text" className=" border  px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
          rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:outline-none" id="offerName" name="offerName"
                            placeholder="Offer Name"  {...register("offerName", {
                                required: {
                                    value: true,
                                    message: 'Offer Name is required'
                                }, minLength: {
                                    value: 4,
                                    message: 'Offer Name is needs to be min 4 length.'
                                }
                            })} />
                        {errors?.offerName && <p role="alert" className="text-red-700">{errors.offerName.message}</p>}
                    </div>
                    <div className="flex flex-col gap-2">

                        <label htmlFor="offerCode" className="text-sm text-slate-600">Offer Code*</label>

                        <input type="text" className=" border  px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
          rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:outline-none" id="offerCode" name="offerCode"
                            placeholder="Offer code" {...register("offerCode", {
                                required: {
                                    value: true,
                                    message: 'OfferCode  is required'
                                }, minLength: {
                                    value: 3,
                                    message: 'OfferCode is needs to be min 3 length.'
                                }
                            })} />
                        {errors?.offerCode && <p role="alert" className="text-red-700">{errors.offerCode.message}</p>}
                    </div>
                </div>


                <div className='flex flex-col gap-3 '>
                    <div className="font-medium leading-tight text-2xl mt-0 mb-2 text-slate-600">IsActive</div>
                    <div className="flex gap-2">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input  appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600
     checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                type="radio" id="active" value={true}
                                {...register("isActive", {
                                    setValueAs: v => Boolean(v),
                                })} />
                            <label className="form-check-label inline-block text-gray-800" htmlFor="active">Active</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input  appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white
     checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                type="radio" id="nonActive" value={true}   {...register("isActive", {
                                    setValueAs: v => Boolean(v),
                                })} />
                            <label className="form-check-label inline-block text-gray-800" htmlFor="nonActive">Non Active</label>
                        </div>

                    </div>
                </div>


                <div className='grid grid-cols-2 grid-rows-2 gap-6 '>
                    <div className="flex flex-col gap-2">

                        <label htmlFor="maxDiscount" className="text-sm text-slate-600">Max Discount</label>

                        <input type="text" className=" border  px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:outline-none" id="maxDiscount" name="maxDiscount"
                            placeholder="Max Discount"  {...register("maxDiscount", {
                                valueAsNumber: true,
                            })} />
                    </div>
                    <div className="flex flex-col gap-2">

                        <label htmlFor="minPurchase" className="text-sm text-slate-600">Min Purchase</label>

                        <input type="text" className=" border  px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:outline-none" id="minPurchase" name="minPurchase"
                            placeholder="Min Purchase" {...register("minPurchase", {
                                valueAsNumber: true,
                            })} />
                    </div>
                    <div className="flex flex-col gap-2">

                        <label htmlFor="discountAmount" className="text-sm text-slate-600">Discount Amount</label>

                        <input type="text" className=" border  px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:outline-none" id="discountAmount" name="discountAmount"
                            placeholder="Discount Amount" {...register("discountAmount", {
                                valueAsNumber: true,
                            })} />
                    </div>
                    <div className="flex flex-col gap-2">

                        <label htmlFor="discountPercent" className="text-sm text-slate-600">Discount Percent</label>

                        <input type="text" className=" border  px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:outline-none" id="discountPercent" name="discountPercent"
                            placeholder="Discount Percent" {...register("discountPercent", {
                                valueAsNumber: true,
                            })} />
                    </div>

                </div>

                <div className="flex flex-col gap-3">

                    <label htmlFor="offerDescription" className="text-sm text-slate-600">Offer Description</label>

                    <input type="text" className=" border  px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:outline-none" id="offerDescription" name="offerDescription"
                        placeholder="Offer Description"  {...register("offerDescription")} />
                </div>
                <div className="flex flex-col gap-3">

                    <label htmlFor="offerCondition" className="text-sm text-slate-600">Offer Condition</label>

                    <input type="text" className=" border  px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:outline-none" id="offerCondition" name="offerCondition"
                        placeholder="Offer Condition" />
                </div>
                <div className="flex flex-col gap-3">

                    <label htmlFor="imgUrl" className="text-sm text-slate-600">Img Url</label>

                    <input type="text" className=" border  px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:outline-none" id="imgUrl" name="imgUrl"
                        placeholder="Img Url" {...register("imgUrl", { required: true })} />
                </div>
                <div>
                    <BaseButton type="submit" variant="secondary" >
                        Submit &#10148;
                    </BaseButton>
                </div>
                <BaseInput type="text" name="firstName" register={register} errors={errors}
                    validationRules={{
                        required: true,
                        minLength: 4
                    }} >
                    First Name
                </BaseInput>
            </form>
        </div>
    )
}