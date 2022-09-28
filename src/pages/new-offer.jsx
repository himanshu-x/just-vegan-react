import React from 'react';
import { useForm } from "react-hook-form";
import BaseButton from '../components/base-components/base-button/BaseButton';
import BaseInput from '../components/base-components/base-input/BaseInput';
import BaseRadioInput from '../components/base-components/base-radio-input/BaseRadioInput';
import OfferService from '../services/OfferService';

export default function NewOffer() {

    const headerText = 'New Offer Card';
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        // console.log(data);
        OfferService.createNewOffer(data).then((createOfferCard) => {
            console.log(createOfferCard)
            if (createOfferCard && createOfferCard._id) {
                alert(`New offer with offer id ${createOfferCard._id} has been created.`)
            }
        })
    }

    return (
        <div className='my-4 p-8 rounded-lg shadow-lg mx-auto max-w-5xl' >
            <p className="font-medium leading-tight text-4xl mt-0 mb-2 text-slate-600 ">{headerText}</p>
            <form className="m-4 flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>

                <BaseInput type='text' name="offerName" id="offerName" placeholder="offerName" register={register} errors={errors} validationRules={{
                    required: true,
                    minLength: 6
                }} >Offer Name</BaseInput>

                <BaseInput type='text' name="offerCode" id="offerCode" placeholder="offerCode" register={register} errors={errors} validationRules={{
                    required: true,
                    minLength: 6
                }} >Offer Code</BaseInput>


                <BaseRadioInput labelName="IsActive" register={register} errors={errors} name="isActive"
                    options={[
                        { optionName: 'Active', value: 'true' },
                        { optionName: 'Non-Active', value: 'true' },
                    ]}>
                </BaseRadioInput>

                <div className='grid grid-cols-2 grid-rows-2 gap-6 '>
                    <BaseInput type='number' name="maxDiscount" id="maxDiscount" placeholder="Max Discount ..." register={register} errors={errors} >Max Discount</BaseInput>
                    <BaseInput type='number' name="minPurchase" id="minPurchase" placeholder="Min Purchase ..." register={register} errors={errors} >Min Purchase</BaseInput>
                    <BaseInput type='number' name="discountAmount" id="discountAmount" placeholder="Discount Amount ..." register={register} errors={errors} >Discount Amount </BaseInput>
                    <BaseInput type='number' name="discountPercent" id="discountPercent" placeholder="Discount Percent ..." register={register} errors={errors} >Discount Percent </BaseInput>

                </div>

                <BaseInput type='text' name="offerDescription" id="offerDescription" placeholder="Offer Description" register={register} errors={errors} validationRules={{
                    minLength: 4
                }} >Offer Description</BaseInput>

                <BaseInput type='text' name="offerCondition" id="offerCondition" placeholder="Offer Condition" register={register} errors={errors} validationRules={{
                    required: true,
                    minLength: 5
                }} >Offer Condition</BaseInput>

                <BaseInput type='text' name="imgUrl" id="imgUrl" placeholder="imgUrl" register={register} errors={errors} validationRules={{
                    required: true,
                }} >Image Url</BaseInput>

                <span>
                    <BaseButton type="submit" variant="secondary" >
                        Submit &#10148;
                    </BaseButton>
                </span>
            </form>
        </div>
    )
}