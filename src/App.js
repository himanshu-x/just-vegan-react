import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Dish from './pages/dish';
import NewDish from './pages/new-dish';
import Offer from './pages/offer';
import NewOffer from "./pages/new-offer-card"

function App() {
  return (

    <Routes>
      <Route path="dish" element={<Dish />} />
      <Route path="new-dish" element={<NewDish />} />
      <Route path="offers" element={<Offer />} />
      <Route path="new-offer" element={<NewOffer />} />
    </Routes>

  );
}

export default App;
