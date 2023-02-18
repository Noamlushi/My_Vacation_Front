import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { BsFillSaveFill } from "react-icons/bs";
import { FaUserFriends, FaHome, FaInfo, FaCloudSun } from "react-icons/fa";
import { MdHelp, MdAirplaneTicket } from "react-icons/md";
import Cart from "./Cart/Cart";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../contexts/AuthContext";
import { CartItems } from "../contexts/CartContext";
import axios from "axios";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const { logout, user } = UserAuth();
  const { cartItems, total, setTotal, setcartItems } = CartItems();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      var cartId = localStorage.getItem("cartId");
      var total = localStorage.getItem("total");
      axios.post("http://localhost:8000/logout", {
        cartId: cartId,
        cartItems: cartItems,
        total: total,
      });
      localStorage.setItem("cartId", "");
      localStorage.setItem("cart", JSON.stringify([]));
      setcartItems([]);
      localStorage.setItem("total", 0);
      setTotal(0);
      // .then((response) => {
      //   console.log(response.data);
      // })
      // .catch((error) => {
      //   console.error(error);
      // });
      navigate("/");
      console.log("You are logged out");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className="max-w mx-auto flex justify-between items-center p-4">
      {/* Left side */}
      <div className="flex items-center">
        <div onClick={() => setNav(!nav)} className="cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="text-stone-700			 text-2xl sm:text-3xl lg:text-4xl px-2">
          My<span className="text-blue-600	 font-bold">Vacation</span>
        </h1>
      </div>

      {/* Search Input */}
      {/* <div className="bg-stone-300	text-blue-800	 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={25} />
        <input
          className="bg-transparent p-2 w-full focus:outline-none "
          type="text"
          placeholder="Search Your Next Vacation"
        />
      </div> */}
      <div className=" flex items-center">
        {!user ? (
          <button className="bg-stone-600 text-white hidden md:flex items-right py-2 rounded-2xl w-20 mr-2">
            <span className="mr-2 ml-4 ">
              <Link to="login">Log In</Link>
            </span>
          </button>
        ) : (
          <button
            className="bg-red-600 text-white hidden md:flex items-right py-2 rounded-2xl w-30 mr-2"
            onClick={handleLogout}
          >
            <span className="mr-2 ml-2 ">Log Out</span>
          </button>
        )}

        {user && <Cart />}
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      {nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}

      {/* Side drawer menu */}
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300 "
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300 "
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={30}
          className="absolute right-4 top-4 cursor-pointer"
        />
        <h2 className="text-2xl p-4 text-stone-700">
          My<span className="font-bold text-blue-600">Vacation</span>
        </h2>
        <nav className=" ">
          <ul className="flex flex-col p-4 text-gray-800 ">
            <li onClick={() => setNav(!nav)} className="text-xl py-4 flex">
              <FaHome size={25} className="mr-4" /> <Link to="/">Home</Link>
            </li>

            <li onClick={() => setNav(!nav)} className="text-xl py-4 flex">
              <MdAirplaneTicket size={25} className="mr-4" />{" "}
              <Link to="/flights">Flights</Link>
            </li>
            {user && user.email === "admin1@gmail.com" && (
              <li onClick={() => setNav(!nav)} className="text-xl py-4 flex">
                <MdHelp size={25} className="mr-4" />{" "}
                <Link to="/admin">Admin</Link>
              </li>
            )}
            <li className="text-xl py-4 flex" onClick={() => setNav(!nav)}>
              <FaCloudSun size={25} className="mr-4" />
              <Link to="/weather">Weather </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
