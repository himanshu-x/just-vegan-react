import React, { Suspense, lazy, createContext, useEffect, } from "react";
import { useDispatch } from 'react-redux'
import { Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import withBox from "./components/hoc-components/withBox";
import { getLocalStorage } from "./utils/common.util";
import userService from './services/userService'

const Login = lazy(() => import("./pages/auth/login"));
const MyAccount = lazy(() => import("./pages/my-account/my-account"));
const MyList = lazy(() => import("./components/page-components/account/AccountList"));
const Addresses = lazy(() => import("./pages/my-account/addresses"));
const AddressDetails = lazy(() => import("./pages/my-account/my-address"));
const AddAddress = lazy(() => import("./pages/my-account/addAddresses"));
const FavouriteDishes = lazy(() => import("./pages/dishes/favourite-dishes"));
const MyOrders = lazy(() => import("./pages/my-account/my-order"));
const SignUp = lazy(() => import("./pages/auth/sign-up"));
const Home = lazy(() => import("./pages/home"));
const DishCartProvider = lazy(() => import("./contexts/dish-cart/DishCart.Provider"));
const ProtectedRoutes = lazy(() => import("./components/protected-public-admin-routes/ProtectedRoutes"));
const PublicRoutes = lazy(() => import("./components/protected-public-admin-routes/PublicRoutes"));
const AdminRoutes = lazy(() => import("./components/protected-public-admin-routes/AdminRoute"));
const Dishes = lazy(() => import("./pages/dishes/dishes"));
const NewDish = lazy(() => import("./pages/dishes/new-dish"));
// const DishDetails = lazy(() => import("./pages/dishes/dish-details"));
const DishDetails = lazy(() => import("./pages/dishes/reduxDishDetails"));
const Offers = lazy(() => import("./pages/offers/offers"));
const NewOffer = lazy(() => import("./pages/offers/new-offer"));
const Navbar = lazy(() => import("./components/utility-components/Navbar"));
const AuthOptions = lazy(() => import("./components/page-components/auth/AuthOptions"));
const Auth = lazy(() => import("./pages/auth/auth"));
const OfferDetails = lazy(() => import("./pages/offers/offer-details"));

export const UserContext = createContext();
const MyAccountBox = withBox(MyAccount);

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    const loginData = getLocalStorage('loginData');
    if (loginData && loginData.userId) {
      userService.setUserStore(dispatch, loginData.userId);
    }
  }, [])


  return (

    <DishCartProvider>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/" element={<ProtectedRoutes />} >
            <Route path="my-account" element={< MyList />}>
              <Route index element={<MyAccountBox />} />
              <Route path="favourite-dishes" element={<FavouriteDishes />}></Route>
              <Route path="addresses" element={<Addresses />}>
                <Route path="add-addresses" element={<AddAddress />}></Route>
              </Route>
              <Route path="addresses/:address" element={<AddressDetails />}></Route>
              <Route path="my-orders" element={<MyOrders />}></Route>
            </Route>
          </Route>
          <Route path="/" element={<PublicRoutes />}>
            <Route path="auth" element={<Auth />}>
              <Route index element={<AuthOptions />} />
              <Route path="login" element={<Login />}></Route>
              <Route path="sign-up" element={<SignUp />}></Route>
            </Route>
          </Route>
          <Route path="/admin" element={<AdminRoutes />}>
            <Route path="new-dish" element={<NewDish />} />
            <Route path="new-offer" element={<NewOffer />} />
          </Route>
          <Route path="dishes" element={<Dishes />} ></Route>
          <Route path="dishes/:dishId" element={<DishDetails />} />
          <Route path="offers" element={<Offers />} />
          <Route path="offers/:offerId" element={<OfferDetails />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes >
      </Suspense>
    </DishCartProvider >
  )
}

export default App;
