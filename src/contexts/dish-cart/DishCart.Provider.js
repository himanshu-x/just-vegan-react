import React, { useState } from "react";
import { getLocalStorage, setLocalStorage } from "../../utils/common.util";
import DishCartContext from "./DishCart.Context";

export default function DishCartProvider({ children }) {
    const storageCartDishes = getLocalStorage('cartDishes') || [];
    const [cartDishes, setCartDishes] = useState(storageCartDishes)

    const setStoreQuantity = (updateCardDishes) => {
        setLocalStorage('cartDishes', updateCardDishes);
    }

    const addDishToCart = (dish) => {
        let cartDishesCopy = JSON.parse(JSON.stringify(cartDishes))
        let updateCardDishes = [];
        if (cartDishesCopy && cartDishesCopy.length > 0) {
            const matchedDishIndex = cartDishesCopy.findIndex((dItem) => dItem._id === dish._id);
            if (matchedDishIndex > -1) {
                cartDishesCopy[matchedDishIndex].quantity++;
                updateCardDishes = cartDishesCopy
            }
            else {
                cartDishesCopy.push({
                    ...dish, quantity: 1
                })
                updateCardDishes = cartDishesCopy;
            }
        } else {
            updateCardDishes = [{ ...dish, quantity: 1 }]
        }
        setCartDishes(updateCardDishes)
        setStoreQuantity(updateCardDishes);
    }

    const removeDishFromCart = (dish) => {
        // console.log(`removeDishFromCart`)
        // console.log(dish)

        let cartDishesCopy = JSON.parse(JSON.stringify(cartDishes))
        //to create a deep copy.
        let updateCardDishes = [];

        const matchedDishIndex = cartDishesCopy.findIndex(dishid => dishid._id === dish._id);
        cartDishesCopy[matchedDishIndex].quantity--;
        updateCardDishes = cartDishesCopy;

        if (cartDishesCopy[matchedDishIndex].quantity < 1) {

            cartDishesCopy.splice(matchedDishIndex, 1)
            updateCardDishes = cartDishesCopy
        }

        setCartDishes(updateCardDishes);
        setStoreQuantity(updateCardDishes);
    }

    return (
        <DishCartContext.Provider
            value={{
                cartDishes,
                addDishToCart,
                removeDishFromCart
            }}>
            {children}
        </DishCartContext.Provider>
    )
}