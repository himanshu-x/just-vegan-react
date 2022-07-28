import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Dishes from './pages/dishes';
import NewDish from "./pages/new-dish";
import DishDetails from "./pages/dish-details";
import Offer from './pages/offers';
import NewOffer from "./pages/new-offer"
import OfferDetails from './pages/offer-details'
import ToDo from './components/practicePart/ToDoList'

function App() {
  return (
    <div>
      <ToDo />
      <Routes>
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
