import React, { createContext, useReducer } from "react";
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Dishes from "./pages/dishes/dishes";
import NewDish from "./pages/dishes/new-dish";
import DishDetails from "./pages/dishes/dish-details";
import Offer from "./pages/offers/offers";
import NewOffer from "./pages/offers/new-offer";
import OfferDetails from "./pages/offers/offer-details";
import Navbar from "./components/utility-components/Navbar";
import AuthOptions from "./components/page-components/auth/AuthOptions";
import Auth from "./pages/auth/auth";
import Login from "./pages/auth/login";
import MyAccount from "./pages/my-account/my-account";
import MyList from "./components/page-components/account/AccountList"
import Addresses from "./pages/my-account/addresses";
import AddressDetails from "./pages/my-account/my-address"
import AddAddress from "./pages/my-account/addAddresses";
import FavouriteDishes from "./pages/dishes/favourite-dishes";
import MyOrders from "./pages/my-account/my-order";
import SignUp from "./pages/auth/sign-up";
import Home from "./pages/home";
import DishCartProvider from "./contexts/dish-cart/DishCart.Provider";
// import { initialState, reducer } from "./reducer/useReducer";

export const UserContext = createContext();

function App() {
  // const [state, dispatch] = useReducer(reducer, initialState);

  return (

    <>
      {/* <UserContext.Provider value={{ state, dispatch }}> */}
      <DishCartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="my-account" element={< MyList />}>
            <Route index element={<MyAccount />} />
            <Route path="favourite-dishes" element={<FavouriteDishes />}></Route>
            <Route path="addresses" element={<Addresses />}>
              <Route path="add-addresses" element={<AddAddress />}></Route>
            </Route>
            <Route path="addresses/:address" element={<AddressDetails />}></Route>
            <Route path="my-orders" element={<MyOrders />}></Route>
          </Route>
          <Route path="auth" element={<Auth />}>
            <Route index element={<AuthOptions />} />
            <Route path="login" element={<Login />}></Route>
            <Route path="sign-up" element={<SignUp />}></Route>
          </Route>
          <Route path="dishes" element={<Dishes />} ></Route>
          <Route path="dishes/:dishId" element={<DishDetails />} />
          <Route path="new-dish" element={<NewDish />} />
          <Route path="offers" element={<Offer />} />
          <Route path="offers/:offerId" element={<OfferDetails />} />
          <Route path="new-offer" element={<NewOffer />} />
        </Routes >
      </DishCartProvider>
      {/* </UserContext.Provider> */}
    </>
  )
}

export default App;
