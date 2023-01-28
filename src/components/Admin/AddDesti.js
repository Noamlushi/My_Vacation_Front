import React from "react";

function AddDesti() {
  return (
    <div className="relative mt-2 flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-blue-700 ">
          Add A New Destination
        </h1>
        <form className="mt-6">
          <div className="mb-2">
            <label
              htmlFor="Name"
              className="block text-sm font-semibold text-gray-800"
            >
              Name
            </label>
            <input
              type="text"
              className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="Continent"
              className="block text-sm font-semibold text-gray-800"
            >
              Continent
            </label>
            <input
              type="text"
              className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="imgUrl"
              className="block text-sm font-semibold text-gray-800"
            >
              Img url
            </label>
            <input
              type="text"
              className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>{" "}
          <div className="mb-2">
            <label
              htmlFor="Price"
              className="block text-sm font-semibold text-gray-800"
            >
              Price
            </label>
            <input
              type="text"
              className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>{" "}
          <div className="mb-2">
            <label
              htmlFor="Description"
              className="block text-sm font-semibold text-gray-800"
            >
              Description
            </label>
            <input
              type="text"
              className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>{" "}
          <div className="mt-6">
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
              submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddDesti;
