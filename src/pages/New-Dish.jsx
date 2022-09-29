import React from "react";
import { useForm } from "react-hook-form";
import BaseButton from "../components/base-components/base-button/BaseButton";
import BaseInput from "../components/base-components/base-input/BaseInput";
import dishService from '../services/dishService'
import BaseMultiCheckbox from "../components/base-components/base-checkbox/BaseMultiCheckbox";
import BaseSingleCheckbox from "../components/base-components/base-checkbox/BaseSingleCheckbox";
import BaseSelectOption from "../components/base-components/base-select-option/BaseSelectOption";

export default function NewDish() {
    const headerText = 'New Dish';
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data)
        // dishService.createNewDish(data).then((createResult) => {
        //     console.log(createResult)
        //     if (createResult && createResult._id) {
        //         alert(`New dish with dish id ${createResult._id} has been created.`)
        //     }
        // })
    };

    return (
        <div className="container my-4 p-8 rounded-lg shadow-lg mx-auto md:w-2/4">
            <p className="font-medium leading-tight text-4xl mt-0 mb-2 text-slate-600 ">{headerText}</p>
            <form className="m-4 flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>

                <BaseInput type="text" name="dishName" id="dishName" register={register} errors={errors} placeholder="Dish-Name" validationRules={{
                    required: true,
                    minLength: 6
                }} >Dish Name</BaseInput>

                <BaseInput type="number" name="price" id="price" register={register} errors={errors} placeholder="Dish-Price" validationRules={{
                    required: true,
                }} >Dish Price</BaseInput>

                <BaseSelectOption name="dishCategory" labelName="Choose Your Dish Category" register={register} errors={errors} options={[
                    { optionName: "Breakfast", value: "breakfast" },
                    { optionName: "Dinner", value: "dinner" },
                    { optionName: "Lunch", value: "lunch" },
                    { optionName: "Snacks", value: "snacks" },
                ]} >
                </BaseSelectOption>

                <div className=" flex flex-col gap-3">
                    <p className="font-medium leading-tight text-2xl text-slate-600"> Quality Checks*</p>
                    <BaseSingleCheckbox name="isCertified" register={register} errors={errors}  >Certified</BaseSingleCheckbox>
                    <BaseSingleCheckbox name="preservative" register={register} errors={errors}  >PreservativeFree</BaseSingleCheckbox>
                    <BaseSingleCheckbox name="isVaccumSealed" register={register} errors={errors}  > Vaccum Sealed</BaseSingleCheckbox>
                </div>

                <div className="">
                    <p className="font-medium leading-tight text-2xl mt-0 mb-2 text-slate-600">Nutrition</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

                        <BaseInput type="number" name="energy" id="energy" register={register} errors={errors} placeholder="Energy">Energy</BaseInput>
                        <BaseInput type="number" name="fat" id="fat" register={register} errors={errors} placeholder="Fat">Fat</BaseInput>
                        <BaseInput type="number" name="carbs" id="carbs" register={register} errors={errors} placeholder="Carbs">Carbs</BaseInput>
                        <BaseInput type="number" name="fiber" id="fiber" register={register} errors={errors} placeholder="Energy">Fiber</BaseInput>
                        <BaseInput type="number" name="protein" id="protein" register={register} errors={errors} placeholder="Protein">Protein</BaseInput>

                        {/* <input type="number" name="energy" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
         border rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white  focus:outline-none" id="energy"
                            placeholder="Energy"
                            {...register("energy", {
                                valueAsNumber: true,
                            })}
                        />
                        */}

                    </div>
                </div>

                <div className="flex flex-col gap-5">
                    <p className="font-medium leading-tight text-2xl mt-0 mb-2 text-slate-600">More info</p>
                    <BaseInput type="text" name="description" register={register} errors={errors} placeholder="Description" > Description</BaseInput>
                    <BaseInput type="text" name="imgUrl" register={register} errors={errors} placeholder="imgUrl" validationRules={{
                        required: true,
                    }} > Image Url</BaseInput>
                </div>

                <span>
                    <BaseButton type="submit" variant="secondary" >
                        Submit
                    </BaseButton>
                </span>

            </form>

        </div>
    )
}
