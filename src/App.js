import React from "react";
import NavBar from "./components/NavBar";
import { useState,useEffect } from "react";
// import Cart from "./components/Cart/Cart";
import Home from "./components/Home/Home";
import Heroi from "./components/InfoPage/Heroi";
import { Routes, Route } from "react-router-dom";
import Flights from "./components/Home/Flights";
import Table from "./components/Admin/Table";
import Login from "./components/LogIn/Login";
import Signin from "./components/LogIn/Sigin";
import UserEdit from "./components/Admin/UserEdit";
// import Graph from "./components/Admin/Graph";

// import Footer from "./components/Fotter";

function App() {

  const [foods, setFoods] = useState([]);
  //  const [flights, setFlights] = useState([]);
  
  useEffect(() => {
     fetch('http://localhost:8000/flight')
        .then((res) => res.json())
        .then((data) => {
          //  console.log(data);
           setFoods(data);
        })
        .catch((err) => {
           console.log(err.message);
        });
  }, []);

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/heroi" element={<Heroi />} />
        <Route path="flights" element={<Flights data={foods} />} />
        <Route path="table" element={<Table />} />
        <Route path="login" element={<Login />} />
        <Route path="signin" element={<Signin />} />
        <Route path="useredit" element={<UserEdit />} />
      </Routes>
    </div>
  );
}

export default App;
