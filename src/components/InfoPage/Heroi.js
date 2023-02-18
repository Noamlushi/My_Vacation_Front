import ImageSlider from "./ImageSlider";
import { useParams, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";

const Heroi = () => {
  const params = useParams();
  const [flightdata, setFlighData] = useState({});
  // const location = useLocation();

  //dates

  useEffect(() => {
    fetch("http://localhost:8000/flight/" + params.id)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setFlighData(data);
      });
  }, []);

  return (
    <div>
      <div className="w-full h-full ">
        <div className="bg-stone-700 absolute  left-0 w-full  h-full" />
        <div className=" w-full h-full absolute  flex-col justify-center text-white">
          {" "}
          <div className="md:left-[10%] max-w-[1100px] m-auto absolute p-4">
            <p>{flightdata.category}</p>
            <h1 className="font-bold te xt-5xl md:text-7xl drop-shadow-2xl">
              <span className="text-blue-600 text-8xl">{flightdata.name}</span>
            </h1>
            <br></br>
            <h2>Flight Details:</h2>
            <h2>Date: {flightdata.date}</h2>
            <h2>Boarding: {flightdata.boarding}</h2>
            <h2>Landing: {flightdata.landing}</h2>
            <h2>Price : {flightdata.priceTicket + "$"}</h2>
            <br></br>
            <p className="max-w-[900px] drop-shadow-2xl py-2 text-xl">
              {flightdata.info}
            </p>
            <h2 className="  font-bold text-lg md:text-3xl drop-shadow-xl mt-5 mb-5">
              Top <span className="text-blue-600">5</span> Attractions
            </h2>{" "}
            <ul className="list-disc   ">
              {flightdata.attractions &&
                flightdata.attractions.map((att, index) => (
                  <li key={index}>
                    <a
                      className=" font-bold underline hover:text-blue-600 "
                      href={att.url}
                      target="_blank"
                    >
                      {att.attraction}
                    </a>
                  </li>
                ))}
            </ul>
            {/* <ul className="list-disc   ">
              <li>Alimatha Island</li>
              <li>Alimatha Island</li>
              <li>Alimatha Island</li>
              <li>Alimatha Island</li>
              <li>Alimatha Island</li>
            </ul> */}
            <ImageSlider gallery={flightdata.gallery} />
            {/* */}
            {/* {location.state.userId} */}
            {/* <div className="grid grid-cols-2 lg:grid-cols-3 gap-10 pt-4 cursor-pointer">
              {location.state.dates.map((item, index) => (
                <div
                  // onClick={() => navigate("/heroi/" + item._id)}
                  key={index}
                  className="border shadow-lg rounded-lg hover:scale-105 duration-300 w-70"
                >
                  <img
                    src={flightdata.image}
                    alt={flightdata.name}
                    className="w-full h-[200px] object-cover rounded-t-lg"
                  />
                  <div className="flex justify-between px-2 py-4">
                    <p className="text-2lg text-black">{flightdata.name}</p>
                    <p className="text-2lg text-black">{item.date}</p>

                    <p>
                      <span className="text-lg bg-blue-500 text-white p-1 rounded-full">
                        {item.price + "$"}
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </div> */}
            {/* */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heroi;
