import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Dishes from './pages/dishes';
import NewDish from './pages/new-dish';
import DishDetails from './pages/dish-details';
import Offer from './pages/offers';
import NewOffer from "./pages/new-offer";
import OfferDetails from './pages/offer-details';
import Navbar from './components/utility-components/Navbar';
import AuthOptions from './components/page-components/auth/AuthOptions'
import Auth from './pages/auth';
import Login from "./pages/login";
import SignUp from './pages/sign-up';
import Home from "./pages/home";
// import ToDo from './components/practicePart/ToDoList'

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="home" element={<Home />}></Route>
        <Route path="auth" element={<Auth />}>
          <Route index element={<AuthOptions />} />
          <Route path="login" element={<Login />}></Route>
          <Route path="sign-up" element={<SignUp />}></Route>
        </Route>
        {/* <Route path="auth" element={<Auth />}></Route>
        <Route path="auth/login" element={<Login />}></Route>
        <Route path="auth/sign-up" element={<SignUp />}></Route> */}
        <Route path="dishes" element={<Dishes />} ></Route>
        <Route path="dishes/:dishId" element={<DishDetails />} />
        <Route path="new-dish" element={<NewDish />} />
        <Route path="offers" element={<Offer />} />
        <Route path="offers/:offerId" element={<OfferDetails />} />
        <Route path="new-offer" element={<NewOffer />} />
      </Routes >
    </div>
  );
}

export default App;
