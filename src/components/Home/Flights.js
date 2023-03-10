import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BsCartPlus } from "react-icons/bs";
import { CartItems } from "../../contexts/CartContext";
import { AiOutlineSearch } from "react-icons/ai";
import { UserAuth } from "../../contexts/AuthContext";

const Flights = (props) => {
  //   console.log(data);
  // const [data, setData] = useState([]);
  const [filterdata, setFilterData] = useState([]);
  const [data, setData] = useState([]);
  const [country, setCountry] = useState("");
  const { user } = UserAuth();
  const navigate = useNavigate();
  // const { cart } = UserAuth();

  const { addData, setcartItems, setTotal, upDateTotal } = CartItems();

  useEffect(() => {
    fetch("http://localhost:8000/flight")
      .then((response) => response.json())
      .then((data) => {
        setFilterData(data);
        setData(data);
      });
  }, []);

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

  const searchCountry = (event) => {
    if (event.key === "Enter") {
      setFilterData(
        data.filter((item) => {
          // return item.name === country;
          return item.name.toLowerCase().indexOf(country.toLowerCase()) !== -1;
        })
      );
      // axios.get("http://localhost:8000/flight/FindByCountry/"+{country}).then((response) => {
      //   // setData(response.data);
      //   console.log(response.data);
      // });
      // setCountry("");
    }
  };

  const handleClick = (id) => {
    console.log(id);
  };

  return (
    <div>
      <div className="max-w-[1640px] m-auto px-4 py-12">
        <h1 className="hover:text-amber-300 text-stone-700 font-bold text-4xl text-center">
          Top <span className="text-blue-600">Rated</span>{" "}
          <span className="text-stone-900">Menu Items</span>
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
        <div className="bg-stone-300	text-blue-800	 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
          <AiOutlineSearch size={25} />
          <input
            value={country}
            onChange={(event) => setCountry(event.target.value)}
            onKeyPress={searchCountry}
            className="bg-transparent p-2 w-full focus:outline-none "
            type="text"
            placeholder="Search Your Next Vacation"
          />
        </div>

        {/* Display foods */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4 cursor-pointer">
          {filterdata.map((item, index) => (
            <div
              key={index}
              className="border shadow-lg rounded-lg hover:scale-105 duration-300"
            >
              {user && (
                <BsCartPlus
                  size={40}
                  color=""
                  className="absolute  ml-[329px] mt-2	 text-stone-100  border-solid  hover:scale-105 hover:text-green-400	"
                  onClick={() => {
                    addData({
                      name: item.name,
                      url: item.image,
                      price: item.priceTicket,
                      date: item.date,
                      continent: item.category,
                    });

                    // addData({
                    //   name: item.name,
                    //   url: item.image,
                    //   price: item.priceTicket,
                    //   date: item.date,
                    // });
                    // axios
                    //   .post("/addToCart", {
                    //     cartId: localStorage.getItem("cartId"),
                    //     itemId: item._id,
                    //   })
                    //   .then((response) => {
                    //     console.log(response.data);
                    //   });
                  }}
                />
              )}

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
                {/* <p className="text-lg text-red p-1 rounded-full">
                <a href="#" className="text-red-600 hover:text-red-900">
                  <AiFillDelete size={30} className="text=red" />
                </a>
                <a href="#" className="text-blue-600 hover:text-red-900">
                  <AiFillEdit size={30} className="text=red" />
                </a>
              </p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Flights;
