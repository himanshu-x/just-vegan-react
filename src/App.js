import logo from './logo.svg';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Dish from './pages/Dish';
import NewDish from './pages/New-Dish';

function App() {
  return (

    <Routes>
      <Route path="dish" element={<Dish />} />
      <Route path="new-dish" element={<NewDish />} />
    </Routes>

  );
}

export default App;
