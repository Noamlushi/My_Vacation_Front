import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../contexts/AuthContext";
import { CartItems } from "../../contexts/CartContext";
import axios from "axios";
export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { createUser, setCartId } = UserAuth();
  const navigate = useNavigate();
  const { setcartItems, setTotal } = CartItems();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const new_user = await createUser(email, password);
      await axios.post("/signup", { user: new_user }).then((res) => {
        // console.log(res.data.data._id);
        // setCartId(res.data.data._id);
        var cartId = res.data.data._id;
        localStorage.setItem("cartId", cartId);
        localStorage.setItem("cart", JSON.stringify([]));
        setcartItems([]);
        localStorage.setItem("total", 0);
        setTotal(0);

        //cart
      });
      navigate("/flights");
      // navigate("/flights", { state: { idcart: res.data.data._id } });
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-blue-700 underline">
          Sign Up
        </h1>
        <form className="mt-6" onSubmit={handleSubmit}>
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:blue-purple-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div
            className="text-xs text-blue-600 hover:underline cursor-pointer"
            onClick={() => {
              navigate("/login");
            }}
          >
            Already have an account?
          </div>
          <div className="mt-6">
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
              Sign UP
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
