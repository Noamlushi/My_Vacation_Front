import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import axios from "axios";
import { async } from "@firebase/util";

const FlightUpdate = (props) => {
  //   console.log(data);
  // const [data, setData] = useState([]);
  const [filterdata, setFilterData] = useState([]);
  const [data, setData] = useState([]);
  const [toFetch, settoFetch] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8000/flight")
      .then((response) => response.json())
      .then((data) => {
        setFilterData(data);
        setData(data);
      });
  }, [toFetch]);

  //   Filter Type burgers/pizza/etc
  const filterType = (category) => {
    console.log(data);
    setFilterData(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  //Filter by price
  const filterPrice = (price) => {
    setFilterData(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };

  const deleteFlightById = async (id) => {
    axios
      .delete("http://localhost:8000/flight/deleteFlight/" + id)
      .then((response) => {
        settoFetch(!toFetch);
        // console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleClick = (id) => {
    console.log(id);
  };

  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="hover:text-amber-300 text-stone-700 font-bold text-4xl text-center">
        Select the destination you want to edit
      </h1>

      {/* Filter Row */}
      <div className="flex flex-col lg:flex-row justify-between">
        {/* Fliter Type */}
        <div>
          <p className="font-bold text-stone-700">Filter Type</p>
          <div className="flex justfiy-between flex-wrap">
            <button
              onClick={() => setFilterData(data)}
              className="m-1    font-bold border-blue-600 text-stone-700  hover:text-blue-600"
            >
              All
            </button>
            <button
              onClick={() => filterType("Asia")}
              className="m-1 border-stone-700 text-blue-600  hover:text-stone-700"
            >
              Asia
            </button>
            <button
              onClick={() => filterType("North America")}
              className="m-1 border-stone-700 text-blue-600  hover:text-stone-700"
            >
              North Ameria
            </button>
            <button
              onClick={() => filterType("South America")}
              className="m-1 border-stone-700 text-blue-600  hover:text-stone-700"
            >
              South Amercia
            </button>
            <button
              onClick={() => filterType("Europe")}
              className="m-1 border-stone-700 text-blue-600  hover:text-stone-700"
            >
              Europe
            </button>
          </div>
        </div>

        {/* Filter Price */}
        <div>
          <p className="font-bold text-gray-700">Filter Price</p>
          <div className="flex justify-between max-w-[390px] w-full">
            <button
              onClick={() => filterPrice("$")}
              className="m-1    font-bold border-blue-600 text-stone-700  hover:text-blue-600"
            >
              $
            </button>
            <button
              onClick={() => filterPrice("$$")}
              className="m-1    font-bold border-blue-600 text-stone-700  hover:text-blue-600"
            >
              $$
            </button>
            <button
              onClick={() => filterPrice("$$$")}
              className="m-1    font-bold border-blue-600 text-stone-700  hover:text-blue-600"
            >
              $$$
            </button>
            <button
              onClick={() => filterPrice("$$$$")}
              className="m-1    font-bold border-blue-600 text-stone-700  hover:text-blue-600"
            >
              $$$$
            </button>
          </div>
        </div>
      </div>

      {/* Display foods */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4 cursor-pointer">
        {filterdata.map((item, index) => (
          <div
            // onClick={() =>
            //   navigate(
            //     "/heroi/" + item._id
            //     // { state: { dates: item.dates } }
            //   )
            // }
            key={index}
            className="border shadow-lg rounded-lg hover:scale-105 duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[200px] object-cover rounded-t-lg"
            />
            <div className="flex justify-between px-2 py-4">
              <p className="text-lg">{item.name}</p>
              <p className="text-lg">{item.date}</p>
              <p>
                {/* <span className="text-lg bg-blue-500 text-white p-1 rounded-full">
                  {item.priceTicket + "$"}
                </span> */}
              </p>
              <p className="text-lg text-red p-1 rounded-full">
                <button
                  onClick={() => {
                    deleteFlightById(item._id);
                  }}
                  className="text-red-600 hover:text-red-900"
                >
                  <AiFillDelete size={30} className="text=red" />
                </button>
                <a href="#" className="text-blue-600 hover:text-red-900">
                  <AiFillEdit size={30} className="text=red" />
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlightUpdate;
