import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { addDishToCart, removeDishFromCart } from '../../../features/dishCartSlice'
import { useParams } from "react-router-dom";
import dishService from '../../../services/dishService'
import BaseButton from "../../../components/base-components/base-button/BaseButton";
import { getLocalStorage } from "../../../utils/common.util";
// import { useForm } from "react-hook-form";
import BaseModal from "../../../components/base-components/base-modal/BaseModal";
import BaseForm from "../../../components/base-components/form-elements/BaseForm";
import fields from "../../../field-registry/dishFields";


function DishDetails() {
    let [dishData, setDishData] = useState({});
    const params = useParams()
    const [openModal, setOpenModal] = useState(false);
    const loginData = getLocalStorage("loginData")
    const cartDishes = useSelector((state) => state.dishCart.cartDishes);
    const dispatch = useDispatch();

    // const { register, handleSubmit, } = useForm();
    const dishProperties = [
        { valueKey: 'energy', displayKey: 'ENERGY : ', displayValue: "(KCAL)" },
        { valueKey: 'fat', displayKey: 'FAT : ', displayValue: "(g)" },
        { valueKey: 'carbs', displayKey: 'CARBS : ', displayValue: "(g)" },
        { valueKey: 'fiber', displayKey: 'FIBER : ', displayValue: "(g)" },
        { valueKey: 'protein', displayKey: 'PROTIEN : ', displayValue: "(g)" },
    ]

    const renderCardButtons = () => {
        // console.log(`Dish card caallled ${dish.dishName}`)

        let matchedCartDish;
        if (cartDishes && cartDishes.length) {
            matchedCartDish = cartDishes.find((cDish) => cDish._id === dishData._id)
        }
        // const currentQuantity = matchedCartDish?.quantity || 0;
        const currentQuantity = matchedCartDish && matchedCartDish.quantity ? matchedCartDish.quantity : 0;
        return (
            currentQuantity ?
                <div className="flex gap-2">
                    <button onClick={() => { dispatch(removeDishFromCart(dishData)) }} className="bg-[#D11243] hover:bg-green-700 text-white   py-1 px-3.5 border  rounded-full">
                        -
                    </button>
                    <div className="text-pink-700">{currentQuantity}</div>
                    <button onClick={() => { dispatch(addDishToCart(dishData)) }} className="bg-[#D11243]  hover:bg-green-700 text-white  py-1 px-3 border  rounded-full">
                        +
                    </button>
                </div>
                :
                <BaseButton onClick={() => { dispatch(addDishToCart(dishData)) }} variant="secondary">
                    Add Cart
                </BaseButton>
        )
    }

    function getDish() {
        dishService.getDish(params.dishId).then((Dish) => {
            setDishData(Dish)

        })
    }

    useEffect(() => {
        getDish();
    }, [])

    const onSubmit = (data) => {
        // console.log(data)
        dishService.updateDish(dishData._id, data).then((updateDishData) => {
            // console.log(updateDishData)
            alert("dish data succesfully change")
            window.location.href = '/dishes'
            return (updateDishData)
        })
    }
    const { dishName, price, dishCategory, description } = fields

    const editDishFields = [
        dishName,
        price,
        dishCategory,
        description,
    ]
    console.log(dishData)


    return (

        <Fragment>

            <div className=" grid grid-cols-1 md:grid-cols-2 max-w-[1000px] lg:max-h-[500px] object-center object-coverbg-cover m-4 md:mx-auto rounded-md overflow-hidden shadow-lg ">
                <img className="w-full rounded-xl" src={dishData.imgUrl} alt="Sunset in the mountains" />
                <div className="px-6 py-4 flex flex-col gap-4">
                    <div>
                        <div className="flex gap-5 items-center">
                            <div className="font-bold text-3xl ">{dishData.dishName}</div>
                            <div class="flex justify-center">
                                <div class="form-check form-switch">
                                    <label class="form-check-label inline-block text-gray-800" for="flexSwitchCheckDefault">IsActive</label>
                                    <input class="form-check-input appearance-none w-9 rounded-full  h-5 align-top  bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm"
                                        value="true" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                </div>
                            </div>
                        </div>
                        <p className="text-gray-700">{dishData.description}</p>
                    </div>

                    <ul>
                        {dishProperties.map((prop, index) => {

                            return (
                                <li key={index} className="flex gap-2">
                                    <span className=" py-1 text-sm font-semibold text-gray-700">{prop.displayKey}  <span className="text-gray-400">{dishData[prop.valueKey]}{prop.displayValue}</span></span>
                                </li>
                            )

                        })}
                    </ul>
                    <div className="flex gap-1">
                        <div className="font-bold text-[#D11243]">MRP:&#8377;{dishData.price} </div>
                        <div className="text-gray-700"><del>&#8377;{dishData.price}</del></div>
                    </div>

                    <div className=" border-t-2 rounded pt-3 flex gap-2">
                        {renderCardButtons()}

                        {loginData && loginData.userType === "admin" && <BaseButton variant="primary" className="px-4 py-1 ml-auto" onClick={() => setOpenModal(!openModal)}>Edit</BaseButton>}
                        {
                            !openModal ? ""
                                : <BaseModal isShown={openModal} headerText="DishDetails" bodyText="Edit your Dishes" >
                                    <BaseForm fields={editDishFields} onSubmit={onSubmit}>
                                        <div className="flex gap-2 mt-2">
                                            <button type="button" className="border rounded bg-green-800 text-white px-2 py-1" onClick={() => setOpenModal(!openModal)}>
                                                Cancel
                                            </button>
                                            <button type="submit" className="border rounded px-2 py-1 bg-[#D11243] text-white ">
                                                Submit
                                            </button>
                                        </div>
                                    </BaseForm>
                                </BaseModal>
                        }

                    </div>
                </div>
            </div>

        </Fragment>
    )
}

export default DishDetails;