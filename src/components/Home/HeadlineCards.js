import React, { useState, useEffect } from "react";

import { BsCartPlus } from "react-icons/bs";

import { useNavigate } from "react-router-dom";
import { CartItems } from "../../contexts/CartContext";

const HeadlineCards = () => {
  //   console.log(data);
  // const [data, setData] = useState([]);
  const [filterdata, setFilterData] = useState([]);
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  // const { cart } = UserAuth();
  const { addData } = CartItems();
  const firstFour = filterdata.slice(0, 4);

  useEffect(() => {
    fetch("http://localhost:8000/flight")
      .then((response) => response.json())
      .then((data) => {
        setFilterData(data);
        setData(data);
      });
  }, []);

  return (
    <div>
      <h1 className="hover:text-amber-300 text-stone-700 font-bold text-4xl text-center">
        Top <span className="text-blue-600">Rated</span>{" "}
        <span className="text-stone-900">Vacation Packages</span>
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 pt-12 cursor-pointer">
        {firstFour.map((item, index) => (
          <div
            key={index}
            className="border shadow-lg rounded-lg hover:scale-105 duration-300"
          >
            <BsCartPlus
              size={40}
              color=""
              className="absolute  ml-[550px] mt-2	 text-stone-100  border-solid  hover:scale-105 hover:text-green-400	"
              onClick={() => {
                addData({
                  name: item.name,
                  url: item.image,
                  price: item.priceTicket,
                  date: item.date,
                });
              }}
            />

            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[200px] object-cover rounded-t-lg"
              onClick={() =>
                navigate(
                  "/heroi/" + item._id
                  // { state: { dates: item.dates } }
                )
              }
            />
            <div className="flex justify-between px-2 py-4">
              <p className="text-2lg">{item.name}</p>
              <p className="text-2lg">{item.date}</p>
              <p>
                <span className="text-lg bg-blue-500 text-white p-1 rounded-full">
                  {item.priceTicket + "$"}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeadlineCards;
