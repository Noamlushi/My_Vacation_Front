import React from "react";
import NavBar from "./components/NavBar";
// import Cart from "./components/Cart/Cart";
import Home from "./components/Home/Home";
import Heroi from "./components/InfoPage/Heroi";
import { Routes, Route } from "react-router-dom";
import Flights from "./components/Home/Flights";
import Login from "./components/LogIn/Login";
import Signup from "./components/LogIn/Signup";
import UserEdit from "./components/Admin/UserEdit";
import Weather from "./components/Weather/Weather";
import AdminPage from "./components/Admin/AdminPage";
import CheckOut from "./components/Cart/CheckOut";
import { AuthContextProvider } from "./contexts/AuthContext";
import { CartContextProvider } from "./contexts/CartContext";
import SocketIO from "./SocketIO";
import { SocketContextProvider } from "./contexts/SocketContext";
import EditDest from "./components/Admin/EditDest";
// import Profile from "./Profile";
// import Graph from "./components/Admin/Graph";

// import Footer from "./components/Fotter";

function App() {
  return (
    <div>
      <SocketContextProvider>
        <CartContextProvider>
          <AuthContextProvider>
            <NavBar />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/heroi" element={<Heroi />} />
              <Route path="/heroi/:id" element={<Heroi />} />
              <Route path="flights" element={<Flights />} />
              <Route path="/admin" element={<AdminPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="useredit" element={<UserEdit />} />
              <Route path="/weather" element={<Weather />} />
              <Route path="/checkOut" element={<CheckOut />} />
              <Route path="/editFlight/:id" element={<EditDest />} />
              {/* <Route path="/profile" element={<Profile />} /> */}
            </Routes>
          </AuthContextProvider>
        </CartContextProvider>
      </SocketContextProvider>
      {/* <AdminPage /> */}
    </div>
  );
}

export default App;
