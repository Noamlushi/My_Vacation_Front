import React, { useState } from "react";
export default function CheckOut() {
  const [dropdown1, setDropdown1] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [dropdown3, setDropdown3] = useState(false);
  const [changeText1, setChangeText1] = useState("City");

  const HandleText1 = (e) => {
    setChangeText1(e);
    setDropdown1(false);
  };

  return (
    <div className="overflow-y-hidden">
      <div className="flex justify-center items-center 2xl:container 2xl:mx-auto lg:py-16 md:py-12 py-9 px-4 md:px-6 lg:px-20 xl:px-44 ">
        <div className="flex w-full sm:w-9/12 lg:w-full flex-col lg:flex-row justify-center items-center lg:space-x-10 2xl:space-x-36 space-y-12 lg:space-y-0">
          <div className="flex w-full  flex-col justify-start items-start">
            <div className>
              <p className="text-3xl lg:text-5xl font-semibold leading-7 lg:leading-9 text-blue-600">
                <span className="text-stone-700">Check</span>out
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
                className="px-2 focus:outline-none focus:ring-2 focus:ring-blue-600 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full"
                type="text"
                placeholder="First Name"
              />
              <input
                className="px-2 focus:outline-none focus:ring-2 focus:ring-blue-600 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full"
                type="text"
                placeholder="Last Name"
              />
              <input
                className="px-2 focus:outline-none focus:ring-2 focus:ring-blue-600 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full"
                type="text"
                placeholder="Address"
              />

              <input
                className="focus:outline-none focus:ring-2 focus:ring-blue-600 border-b px-2 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4   w-full"
                type="text"
                placeholder="Phone Number"
              />
            </div>
            <button className="focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 mt-8 text-base font-medium focus:ring-2 focus:ring-ocus:ring-gray-800 leading-4 hover:bg-blue-600 py-4 w-full md:w-4/12 lg:w-full text-white bg-stone-700">
              Proceed to payment
            </button>
            <div className="mt-4 flex justify-start items-center w-full">
              <a
                href="javascript:void(0)"
                className="text-base leading-4 underline focus:outline-none focus:text-gray-500  hover:text-gray-800 text-gray-600"
              >
                Back to my bag
              </a>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start bg-gray-50 w-full p-6 md:p-14">
            <div>
              <h1 className="text-2xl font-semibold leading-6 text-gray-800">
                Order Summary
              </h1>
            </div>
            <div className="flex mt-7 flex-col items-end w-full space-y-6">
              <div className="flex justify-between w-full items-center">
                <p className="text-lg leading-4 text-gray-600">Total items X</p>
                <p className="text-lg font-semibold leading-4 text-gray-600">
                  20
                </p>
              </div>
            </div>
            <div className="flex justify-between w-full items-center mt-32">
              <p className="text-xl font-semibold leading-4 text-gray-800">
                Total{" "}
              </p>
              <p className="text-lg font-semibold leading-4 text-gray-800">
                $2900
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
