import React, { useState } from "react";
import { CartItems } from "../../contexts/CartContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { UserAuth } from "../../contexts/AuthContext";

export default function CheckOut() {
  const { setcartItems, cartItems, total, setTotal } = CartItems();
  const { user } = UserAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    Address: "",
    Phone: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <div className="overflow-y-hidden">
      <div className="flex justify-center items-center 2xl:container 2xl:mx-auto lg:py-16 md:py-12 py-9 px-4 md:px-6 lg:px-20 xl:px-44 ">
        <div className="flex w-full sm:w-9/12 lg:w-full flex-col lg:flex-row justify-center items-center lg:space-x-10 2xl:space-x-36 space-y-12 lg:space-y-0">
          <div className="flex w-full  flex-col justify-start items-start">
            <div>
              <p className="text-3xl lg:text-5xl font-semibold leading-7 lg:leading-9 text-blue-600">
                <span className="text-stone-500">Check</span>out
              </p>
            </div>
            <div className="mt-2">
              {/* <a
                href="javascript:void(0)"
                className="text-base leading-4 underline  hover:text-gray-800 text-gray-600"
              >
                Back to my bag
              </a> */}
            </div>
            <div className="mt-12">
              <p className="text-xl font-semibold leading-5 text-gray-800">
                Enter your details
              </p>
            </div>
            <div className="mt-8 flex flex-col justify-start items-start w-full space-y-8 ">
              <input
                value={formData.FirstName}
                name="FirstName"
                onChange={handleChange}
                className="px-2 focus:outline-none focus:ring-2 focus:ring-blue-600 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full"
                type="text"
                placeholder="First Name"
              />
              <input
                value={formData.LastName}
                name="LastName"
                onChange={handleChange}
                className="px-2 focus:outline-none focus:ring-2 focus:ring-blue-600 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full"
                type="text"
                placeholder="Last Name"
              />
              <input
                value={formData.Address}
                name="Address"
                onChange={handleChange}
                className="px-2 focus:outline-none focus:ring-2 focus:ring-blue-600 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full"
                type="text"
                placeholder="Address"
              />

              <input
                value={formData.Phone}
                name="Phone"
                onChange={handleChange}
                className="focus:outline-none focus:ring-2 focus:ring-blue-600 border-b px-2 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4   w-full"
                type="text"
                placeholder="Phone Number"
              />
            </div>
            <button
              onClick={() => {
                axios
                  .post("http://localhost:8000/updateSales", {
                    sales: cartItems.map((item, index) => ({
                      continent: item.continent,
                      q: item.q,
                    })),
                    email: user.email,
                    total: localStorage.getItem("total"),
                  })
                  .then((response) => {
                    axios
                      .post("http://localhost:8000/order/creatOrder", {
                        FirstName: formData.FirstName,
                        LastName: formData.LastName,
                        Address: formData.Address,
                        Phone: formData.Phone,
                        Total: total,
                      })
                      .then((response) => {
                        // console.log(JSON.stringify(response.data));
                        localStorage.setItem("cart", JSON.stringify([]));
                        setcartItems([]);
                        localStorage.setItem("total", 0);
                        setTotal(0);
                        navigate("/");
                      });
                  });
              }}
              className="focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 mt-8 text-base font-medium focus:ring-2 focus:ring-ocus:ring-gray-800 leading-4 hover:bg-blue-600 py-4 w-full md:w-4/12 lg:w-full text-white bg-stone-700"
            >
              Proceed to payment
            </button>
            {/* <div className="mt-4 flex justify-start items-center w-full">
              <a
                href="javascript:void(0)"
                className="text-base leading-4 underline focus:outline-none focus:text-gray-500  hover:text-gray-800 text-gray-600"
              >
                Back to my bag
              </a>
            </div> */}
          </div>
          <div className="flex flex-col justify-start items-start bg-gray-50 w-full p-6 md:p-14">
            <div>
              <h1 className="text-2xl font-semibold leading-6 text-gray-800">
                Order Summary
              </h1>
            </div>
            {/* <div className="flex mt-7 flex-col items-end w-full space-y-6">
              <div className="flex justify-between w-full items-center"> */}
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="flex mt-7 flex-col items-end w-full space-y-6"
              >
                <div className="flex justify-between w-full items-center">
                  {/* <p className="text-lg leading-4 text-gray-600">
                      {item.name}
                    </p> */}
                  <p className="text-lg leading-4 text-gray-600">
                    {item.name}
                    <span className=" text-blue-600"> (x{item.q}) </span>
                  </p>

                  <p className="text-lg font-semibold leading-4 text-gray-600">
                    {item.price * item.q + "$"}
                  </p>
                </div>
              </div>
            ))}
            {/* </div>
            </div> */}
            {/* <div className="flex mt-7 flex-col items-end w-full space-y-6">
              <div className="flex justify-between w-full items-center">
                <p className="text-lg leading-4 text-gray-600">Total items X</p>
                <p className="text-lg font-semibold leading-4 text-gray-600">
                  20
                </p>
              </div>
            </div> */}

            <div className="flex justify-between w-full items-center mt-32">
              <p className="text-xl font-semibold leading-4 text-gray-800">
                Total{" "}
              </p>
              <p className="text-lg font-semibold leading-4 text-blue-600">
                {total + "$"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
