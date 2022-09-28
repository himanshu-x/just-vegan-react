import React from "react";
import { useForm } from "react-hook-form";
import BaseButton from "../components/base-components/base-button/BaseButton";
import BaseInput from "../components/base-components/base-input/BaseInput";
import dishService from '../services/dishService'

export default function NewDish() {
    const headerText = 'New Dish';
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        dishService.createNewDish(data).then((createResult) => {
            console.log(createResult)
            if (createResult && createResult._id) {
                alert(`New dish with dish id ${createResult._id} has been created.`)
            }
        })
    };

    return (
        <div className="container my-4 p-8 rounded-lg shadow-lg mx-auto md:w-2/4">
            <p className="font-medium leading-tight text-4xl mt-0 mb-2 text-slate-600 ">{headerText}</p>
            <form className="m-4 flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
                <BaseInput type="text" name="dishName" id="dishName" register={register} errors={errors} placeholder="Dish-Name" validationRules={{
                    required: true,
                    minLength: 6
                }} >Dish Name</BaseInput>

                <BaseInput type="number" name="price" id="price" register={register} errors={errors} placeholder="Dish-Price" validationRules={{
                    required: true,
                }} >Dish Price</BaseInput>
                {/* <div className="form-group mb-6">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="dishName" className="text-sm text-slate-600">Dish Name*</label>
                        <input type="text" className="form-control block border w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
          rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:outline-none" id="dishName" name="dishName"
                            placeholder="Dish Name" {...register("dishName", {
                                required: {
                                    value: true,
                                    message: 'Dish Name is required'
                                }, minLength: {
                                    value: 2,
                                    message: 'Dish Name is needs to be min 2 length.'
                                }
                            })} />
                        {errors?.dishName && <p role="alert" className="text-red-700">{errors.dishName.message}</p>}
                    </div>
                </div> */}
                {/* <div className="form-group mb-6">
                    <label htmlFor="dishPrice" className="text-sm text-gray-500">Dish Price*</label>
                    <input type="number" className="form-control block border w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
        rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:outline-none" id="dishPrice" name="price"
                        placeholder="Price" {...register("price", { required: true, min: 50 })} />
                    {errors.price?.type === 'required' && <p role="alert" className="text-red-700">Dish Price is required</p>}
                </div> */}
                <div>
                    <label
                        htmlFor="dishCategory"
                        className="form-label inline-block mb-2 text-slate-600 text-sm"
                    >Dish Category*</label>
                    <select id="dishCategory" name="dishCategory" className="form-select form-select-sm appearance-none
                         block w-full px-2 py-1 text-sm font-normal text-gray-700    bg-white bg-clip-padding bg-no-repeat rounded    transition    ease-in-out    m-0
   border focus:text-gray-700 focus:bg-white focus:outline-none" aria-label=".form-select-sm example"
                        defaultValue="" {...register("dishCategory", { required: true })}>
                        <option value="">Choose Your Option</option>
                        <option value="breakfast">Breakfast</option>
                        <option value="lunch">Lunch</option>
                        <option value="snacks">Snacks</option>
                        <option value="dinner">Dinner</option>
                    </select>
                    {errors.dishCategory?.type === 'required' && <p role="alert" className="text-red-700">Dish category is required</p>}
                </div>

                <div className="mt-6 flex flex-col gap-3">
                    <p className="font-medium leading-tight text-2xl mt-0 mb-2 text-slate-600"> Quality Checks*</p>
                    <div className="form-check">
                        <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600
                                 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                            type="checkbox"
                            id="vaccumSealed"
                            {...register("isVaccumSealed")}
                        />
                        <label className="form-check-label inline-block text-gray-400" htmlFor="vaccumSealed">
                            Vaccum Sealed
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 
                            focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                            type="checkbox" id="preservative"
                            {...register("isPreservativeFree")}
                        />
                        <label className="form-check-label inline-block text-gray-400" htmlFor="preservative">
                            PreservativeFree
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600
                             focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                            type="checkbox" id="certified" name="isCertified"
                            {...register("isCertified")}
                        />
                        <label className="form-check-label inline-block text-gray-400" htmlFor="certified">
                            Certified
                        </label>
                    </div>
                </div>

                <div className="mt-6 ">
                    <p className="font-medium leading-tight text-2xl mt-0 mb-2 text-slate-600">Nutrition</p>

                    <div className="grid grid-cols-4 gap-5">

                        <input type="number" name="energy" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
         border rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white  focus:outline-none" id="energy"
                            placeholder="Energy"
                            {...register("energy", {
                                valueAsNumber: true,
                            })}
                        />
                        <input type="number" name="fat" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
         border rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white  focus:outline-none" id="fat"
                            placeholder="Fat"
                            {...register("fat", {
                                valueAsNumber: true,
                            })}
                        />
                        <input type="number" name="carbs" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
         border rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:outline-none" id="carbs"
                            placeholder="Carbs"
                            {...register("carbs", {
                                valueAsNumber: true,
                            })}

                        />
                        <input type="number" name="fiber" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
         border rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:outline-none" id="fiber"
                            placeholder="Fiber"
                            {...register("fiber", {
                                valueAsNumber: true,
                            })}

                        />
                        <input type="number" name="protein" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
         border rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:outline-none" id="protein"
                            placeholder="Protein"
                            {...register("protein", {
                                valueAsNumber: true,
                            })}
                        />

                    </div>
                </div>
                <div className="mt-8 flex flex-col gap-5">
                    <p className="font-medium leading-tight text-2xl mt-0 mb-2 text-slate-600">More info</p>
                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="description"
                            className="form-label inline-block  text-gray-400 text-sm"
                        >Description</label>
                        <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
         border rounded transition ease-in-out  m-0 focus:text-gray-700
          focus:bg-white focus:border-blue-600 focus:outline-none" id="description" name="description"
                            placeholder="Description"
                            {...register("description")}
                        />
                        <div className="flex flex-col gap-2">
                            <label htmlFor="imgUrl" className="text-sm text-gray-400">Image Url*</label>
                            <input type="text" id="imgUrl" name="imgUrl" className="form-control block border w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
          rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                placeholder="imgUrl"
                                {...register("imgUrl", { required: true })}
                            />
                        </div>
                    </div>

                </div>
                <div className="mt-6">  <BaseButton type="submit" variant="secondary" >
                    Submit
                </BaseButton>
                </div>
            </form>

        </div>
    )
}
