import React from "react";
import { useForm } from "react-hook-form";
import addressService from "../../services/addressService";
import { getLocalStorage } from "../../utils/common.util";
import BaseButton from "../../components/base-components/base-button/BaseButton";
import BaseInput from "../../components/base-components/form-elements/BaseInput";
import BaseSelectOption from "../../components/base-components/form-elements/BaseSelect";

export default function AddAddress() {
    const loginData = getLocalStorage('loginData');
    const { register, handleSubmit, formState: { errors } } = useForm();

    function onSubmit(data) {
        addressService.getAddresses(data, loginData.userId).then((addressResult) => {

            console.log(addressResult)
            if (addressResult && addressResult._id) {
                alert('New dish with dish id ${addressResult._id} has been created.')
            }
        })
            .catch((error) => {
                alert(error)
            })
    }

    return (
        <div className="shadow-md flex flex-col gap-4">
            <h2 className="p-3 text-3xl"> New Address </h2>
            <form action="#" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-6 p-4 ">
                    <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 ">

                        <BaseInput labelName="Name" type="text" name="name" id="name" register={register} errors={errors} placeholder="Name" validationRules={{
                            required: true,
                        }} />

                        <BaseInput labelName="Phone1" type="number" name="phone1" id="phone1" register={register} errors={errors} placeholder="Phone1" validationRules={{
                            required: true,
                        }} />

                        <BaseSelectOption name="addressType" labelName="Choose Address Type" register={register} errors={errors} options={[
                            { optionName: "Home", value: "Home" },
                            { optionName: "Office", value: "Office" },
                        ]} >
                        </BaseSelectOption>

                        <BaseInput labelName="Locality" type="text" name="locality" id="locality" register={register} errors={errors} placeholder="Locality" validationRules={{
                            required: true,
                        }} />

                        <BaseInput labelName="Landmark" type="text" name="landmark" id="landmark" register={register} errors={errors} placeholder="Landmark" validationRules={{
                            required: true,
                        }} />

                        <BaseInput labelName="City" type="text" name="city" id="city" register={register} errors={errors} placeholder="City" validationRules={{
                            required: true,
                        }} />

                        <BaseInput labelName="Pincode" type="number" name="pincode" id="pincode" register={register} errors={errors} placeholder="Pincode" validationRules={{
                            required: true,
                        }} />

                        <BaseInput labelName="State/Province" type="text" name="state" id="state" register={register} errors={errors} placeholder="State/Province" validationRules={{
                            required: true,
                        }} />

                    </div>
                    <BaseInput labelName="Address Line" type="text" name="addressLine" id="addressLine" register={register} errors={errors} placeholder="Address Line" validationRules={{
                        required: true,
                    }} />
                    <BaseButton className="px-4 py-2 w-fit" type="submit" variant="secondary">Save</BaseButton>
                </div>
            </form>
        </div>
    )

}