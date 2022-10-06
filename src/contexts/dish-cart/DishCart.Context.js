import React from "react";
export default React.createContext({
    cartDishes: [],
    addDishToCart: () => {},
    removeDishFromCart: () => {}
})