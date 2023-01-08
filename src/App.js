import React from "react";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart/Cart";
import Home from "./components/Home/Home";
import Heroi from "./components/InfoPage/Heroi";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/heroi" element={<Heroi />} />
      </Routes>
      <Cart />
    </div>
  );
}

export default App;
