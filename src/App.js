import React from "react";
import NavBar from "./components/NavBar";
// import Cart from "./components/Cart/Cart";
import Home from "./components/Home/Home";
import Heroi from "./components/InfoPage/Heroi";
import { Routes, Route } from "react-router-dom";
import Flights from "./components/Home/Flights";
import Table from "./components/Admin/Table";
import Login from "./components/LogIn/Login";
import Signin from "./components/LogIn/Sigin";
import UserEdit from "./components/Admin/UserEdit";
import AuthForm from "./components/AuthForm";
import AdminPage from "./components/Admin/AdminPage";
// import Graph from "./components/Admin/Graph";

// import Footer from "./components/Fotter";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/heroi" element={<Heroi />} />
        <Route path="/heroi/:id" element={<Heroi />} />
        <Route path="flights" element={<Flights />} />
        <Route path="table" element={<Table />} />
        <Route path="login" element={<Login />} />
        <Route path="login/signin" element={<Signin />} />
        <Route path="useredit" element={<UserEdit />} />
        <Route path="authform" element={<AuthForm />} />
      </Routes>
      {/* <AdminPage /> */}
    </div>
  );
}

export default App;
