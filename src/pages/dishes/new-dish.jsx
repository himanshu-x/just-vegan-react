import React from "react";
import { useForm } from "react-hook-form";
import BaseButton from "../../components/base-components/base-button/BaseButton";
import BaseInput from "../../components/base-components/form-elements/BaseInput";
import dishService from '../../services/dishService'
import BaseCheckbox from "../../components/base-components/form-elements/BaseCheckbox";
import BaseSelectOption from "../../components/base-components/form-elements/BaseSelect";

export default function NewDish() {
    const headerText = 'New Dish';
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        // console.log(data)
        dishService.createNewDish(data).then((createResult) => {
            if (createResult && createResult._id) {
                alert(`New dish with dish id ${createResult._id} has been created.`)
            }
            console.log(createResult)
            return createResult
        })
    };

    return (
        <div className="container my-4 p-8 rounded-lg shadow-lg mx-auto md:w-2/4  bg-gray-200" >
            <p className="font-medium leading-tight text-4xl mt-0 mb-2 text-slate-600 ">{headerText}</p>
            <form className="m-4 flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>

                <BaseInput
                    id="dishName"
                    type="text"
                    name="dishName"
                    labelName="Dish Name"
                    placeholder="Dish-Name"
                    register={register}
                    errors={errors}
                    validationRules={{
                        required: true,
                        minLength: 2,
                        pattern: /[A-Za-z]{3}/
                    }} />
                <BaseInput
                    id="price"
                    type="number"
                    name="price"
                    labelName="Dish-Price"
                    register={register}
                    step={0.01}
                    errors={errors}
                    placeholder="Dish-Price"
                    validationRules={{
                        required: true,
                    }} />

                <BaseSelectOption name="dishCategory" labelName="Choose Your Dish Category" register={register} errors={errors} options={[
                    { optionName: "Breakfast", value: "breakfast" },
                    { optionName: "Dinner", value: "dinner" },
                    { optionName: "Lunch", value: "lunch" },
                    { optionName: "Snacks", value: "snacks" },
                ]} >
                </BaseSelectOption>

                <div className=" flex flex-col gap-3">
                    <p className="font-medium leading-tight text-2xl text-slate-600"> Quality Checks*</p>
                    <BaseCheckbox name="isCertified" register={register} errors={errors}  >Certified</BaseCheckbox>
                    <BaseCheckbox name="preservative" register={register} errors={errors}  >PreservativeFree</BaseCheckbox>
                    <BaseCheckbox name="isVaccumSealed" register={register} errors={errors}  > Vaccum Sealed</BaseCheckbox>
                </div>

                <div className="">
                    <p className="font-medium leading-tight text-2xl mt-0 mb-2 text-slate-600">Nutrition</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

                        <BaseInput
                            type="number"
                            labelName="Energy"
                            name="energy"
                            id="energy" register={register} errors={errors}
                            placeholder="Energy" />
                        <BaseInput
                            type="number" labelName="Fat"
                            name="fat" id="fat"
                            register={register} errors={errors}
                            placeholder="Fat" />
                        <BaseInput type="number" labelName="Carbs" name="carbs" id="carbs" register={register} errors={errors} placeholder="Carbs" />
                        <BaseInput type="number" labelName="Fiber" name="fiber" id="fiber" register={register} errors={errors} placeholder="Energy" />
                        <BaseInput type="number" labelName="Protein" name="protein" id="protein" register={register} errors={errors} placeholder="Protein" />

                    </div>
                </div>

                <div className="flex flex-col gap-5">
                    <p className="font-medium leading-tight text-2xl mt-0 mb-2 text-slate-600">More info</p>
                    <BaseInput type="text" name="description" labelName="Description" register={register} errors={errors} placeholder="Description" />
                    <BaseInput type="text" name="imgUrl" labelName="Image Url" register={register} errors={errors} placeholder="imgUrl" validationRules={{
                        required: true,
                    }} />
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
