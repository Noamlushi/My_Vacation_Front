import CartItem from "./CartItem";
import { AiOutlineClose } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import React, { useState } from "react";
import { CartItems } from "../../contexts/CartContext";
import { useNavigate } from "react-router-dom";

function Cart() {
  const [cart, setCart] = useState(false);
  const { cartItems, total } = CartItems();
  const navigate = useNavigate();
  // const cartId = localStorage.getItem("cartId");
  // console.log(cartItems[0]);
  return (
    <>
      <button
        className="bg-blue-600 text-white hidden md:flex items-right py-2 rounded-2xl w-20"
        onClick={() => setCart(!cart)}
      >
        <BsFillCartFill size={20} className="ml-2 mr-2" /> Cart
      </button>
      <div
        className={
          cart
            ? "fixed top-0 right-0 w-[450px] h-full bg-white z-10 duration-300 "
            : "fixed top-0 left-[-100%] w-[300px] h-full bg-white z-10 duration-300"
        }
      >
        <AiOutlineClose
          onClick={() => setCart(!cart)}
          size={30}
          className=" absolute right-4 top-4 cursor-pointer"
        />
        <h2 className="text-2xl p-4 text-stone-700">
          My<span className="font-bold text-blue-600">Cart</span>
        </h2>
        <nav className="">
          <div className="flex flex-col max-w-3xl p-6  sm:p-10">
            <ul className="flex flex-col divide-y divide-gray-700">
              {cartItems &&
                cartItems.map((item, index) => (
                  <div key={index}>
                    <CartItem
                      name={item.name}
                      url={item.url}
                      date={item.date}
                      price={item.price}
                      q={item.q}
                    />
                  </div>
                ))}
            </ul>
            <div className="space-y-1 text-right">
              <p>
                Total amount:
                <span className="font-semibold">{total && total} €</span>
              </p>
            </div>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => navigate("/flights")}
                type="button"
                className="px-6 py-2 border rounded-md bg-stone-600 text-white"
              >
                Back
                <span className="sr-only sm:not-sr-only">to shop</span>
              </button>
              <button
                onClick={() => navigate("/checkOut")}
                type="button"
                className="px-6 py-2 border rounded-md bg-blue-600 text-white"
              >
                <span className="sr-only sm:not-sr-only">Continue to</span>
                Checkout
              </button>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Cart;
