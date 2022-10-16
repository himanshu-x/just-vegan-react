import React, { useState } from "react";
import { useEffect } from "react";
import dishService from '../../services/dishService'
import loginService from "../../services/loginService";
import DishCard from "../../components/page-components/DishCard";
import { getLocalStorage } from "../../utils/common.util"
import BaseSearch from "../../components/base-components/base-search/BaseSearch";
import BaseButton from "../../components/base-components/base-button/BaseButton";


export default function Dishes() {
    const [dishList, setDishList] = useState([]);
    const [userData, setUserData] = useState({});
    const [filterPrice, setFilterPrice] = useState(1000);
    const [filters, setFilters] = useState(initFilters());

    function initFilters() {
        return {
            breakfast: false,
            lunch: false,
            snacks: false,
            dinner: false,
        }
    }

    function getUserDetails() {
        const loginData = getLocalStorage('loginData');
        if (loginData && loginData.userId) {
            return loginService.getLoginAccountDetails(loginData.userId).then((userPayload) => {
                setUserData(userPayload)
            })
        }
    }

    function getDishes() {
        return dishService.getDishes().then((dishesData) => {
            setDishList(dishesData);
        });
    }

    async function fetchAsync() {
        await getUserDetails();
        getDishes();
    }

    useEffect(() => {
        fetchAsync();
    }, [])


    const handlePricingSlide = (e) => {
        // console.log(e.target.value)
        const { value } = e.target
        setFilterPrice(value)
    }

    const onFilterChange = (e) => {
        const { name: categoryName, checked } = e.target
        setFilters({ ...filters, [categoryName]: checked });
    };

    const clearFilters = () => {
        setFilters(initFilters())
    }


    const hasFilter = Object.keys(filters).find((filterKey) => filters[filterKey]);
    const filteredDishes = hasFilter ? dishList.filter((dish) => filters[dish.dishCategory]) : dishList;
    const finalFilteredDishes = filteredDishes.filter(dish => dish.price < parseInt(filterPrice))


    return (
        <div className="m-6">
            <BaseSearch></BaseSearch>

            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">Dishes</h2>
            <div className="fleex flex-col gap-2 border px-4 py-2 rounded-md">
                <h3 className=" text-2xl border-b text-gray-500 font-medium" >Filters</h3>
                <div className="flex gap-2 border-b items-center py-4">
                    <label htmlFor="Price" className=" text-gray-500 text-xl">Price (between 0 and 1000):</label>
                    <input title={filterPrice} id="Price" type="range" value={filterPrice} name="price" min="0" max="1000" step="100"
                        onChange={handlePricingSlide}></input>
                    {filterPrice}

                </div>
                <div className="flex gap-4 items-center border-b py-4">
                    <span className="text-gray-500 text-xl">Filter Dishes :</span>
                    <div className="flex gap-2">
                        <input
                            id="breakfast"
                            type="checkbox"
                            name="breakfast"
                            checked={filters.breakfast}
                            onChange={onFilterChange}
                        />
                        <label htmlFor="breakfast" className="text-gray-400 text-lg">
                            Breakfast
                        </label>
                    </div>
                    <div className="flex gap-2">
                        <input
                            id="lunch"
                            type="checkbox"
                            name="lunch"
                            checked={filters.lunch}
                            onChange={onFilterChange}
                        />
                        <label htmlFor="lunch" className="text-gray-400 text-lg">
                            Lunch
                        </label>
                    </div>
                    <div className="flex gap-2">
                        <input
                            id="snacks"
                            type="checkbox"
                            name="snacks"
                            checked={filters.snacks}
                            onChange={onFilterChange}
                        />
                        <label htmlFor="snacks" className="text-gray-400 text-lg">
                            Snacks
                        </label>
                    </div>
                    <div className="flex gap-2">
                        <input
                            id="dinner"
                            type="checkbox"
                            name="dinner"
                            checked={filters.dinner}
                            onChange={onFilterChange}
                        />
                        <label htmlFor="dinner" className="text-gray-400 text-lg">
                            Dinner
                        </label>
                    </div>

                    <BaseButton variant="secondary" onClick={clearFilters}>
                        Clear All
                    </BaseButton>
                </div>
            </div>




            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 ">
                {
                    finalFilteredDishes.map((dish) => {
                        return (
                            <DishCard dish={dish} key={dish._id} userData={userData} reFetchUser={getUserDetails} />
                        )
                    })
                }
            </div>
        </div>

    )
}