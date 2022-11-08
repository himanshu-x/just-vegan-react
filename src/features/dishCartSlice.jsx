import { createSlice } from '@reduxjs/toolkit'
import { getLocalStorage, setLocalStorage } from "../utils/common.util";
const setStoreQuantity = (updateCardDishes) => {
    setLocalStorage('cartDishes', updateCardDishes);
}
const storageCartDishes = getLocalStorage('cartDishes') || [];


const dishCartSlice = createSlice({
    name: 'dish-cart',
    initialState: {
        cartDishes: storageCartDishes
    },
    reducers: {
        addDishToCart: (state, { type, payload: dish }) => {
            let cartDishesCopy = JSON.parse(JSON.stringify(state.cartDishes))
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

            state.cartDishes = updateCardDishes
            setStoreQuantity(updateCardDishes);
        },
        removeDishFromCart: (state, { payload: dish }) => {
            // console.log(`removeDishFromCart`);
            // console.log(dish);

            let cartDishesCopy = JSON.parse(JSON.stringify(state.cartDishes))
            //to create a deep copy.
            let updateCardDishes = [];

            const matchedDishIndex = cartDishesCopy.findIndex(dishid => dishid._id === dish._id);
            cartDishesCopy[matchedDishIndex].quantity--;
            updateCardDishes = cartDishesCopy;

            if (cartDishesCopy[matchedDishIndex].quantity < 1) {

                cartDishesCopy.splice(matchedDishIndex, 1)     // splice(position ,remove count , add items)
                updateCardDishes = cartDishesCopy
            }
            state.cartDishes = updateCardDishes

            setStoreQuantity(updateCardDishes);

        },

        deleteDishFromCart: (state, { payload: cIndex }) => {

            let cartDishesCopy = JSON.parse(JSON.stringify(state.cartDishes));
            let updateCardDishes = [];
            if (cartDishesCopy[cIndex]) {
                cartDishesCopy.splice(cIndex, 1)
                updateCardDishes = cartDishesCopy
            }
            state.cartDishes = updateCardDishes
            setStoreQuantity(updateCardDishes);
        },
        clearMyCart: (state) => {
            let updateCardDishes = [];
            alert("Order Successfull")
            localStorage.removeItem(state.cartDishes)
            state.cartDishes = updateCardDishes
            setStoreQuantity(updateCardDishes);
        },

    },
})

const { actions, reducer } = dishCartSlice;

// // Action creators are generated for each case reducer function

export const { addDishToCart, removeDishFromCart, deleteDishFromCart, clearMyCart, } = actions

export default reducer