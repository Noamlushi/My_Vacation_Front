import React, { useState, useEffect } from "react";
export default function InventoryByContinents() {
  const [flightData, setflightData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/flight")
      .then((response) => response.json())
      .then((data) => {
        setflightData(data);
      });
  }, []);

  function groupFlightsByContinent(flights) {
    return flights.reduce((acc, flight) => {
      const continent = flight.category;
      if (!acc[continent]) {
        acc[continent] = [];
      }
      acc[continent].push(flight);
      return acc;
    }, {});
  }

  const myObj = groupFlightsByContinent(flightData);
  const keys = Object.keys(myObj);
  const lengths = Object.values(myObj).map((arr) => arr.length);

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full divide-y  divide-gray-200">
          {/* head */}
          <thead className="bg-gray-50">
            <tr className=" ">
              <th className=" text-center text-5xl font-bold text-blue-500 uppercase tracking-wider">
                CONTINENT
              </th>
              <th className=" text-center text-5xl font-bold text-stone-600 uppercase tracking-wider">
                FLIGHT AMOUNT{" "}
              </th>
            </tr>
          </thead>
          <tbody className=" divide-y  divide-gray-200">
            {/* row 1 */}
            {keys.map((key, index) => {
              return (
                <tr className=" text-center items-center flex-auto justify-center text-xl font-bold ">
                  <td>{key}</td>
                  <td>{lengths[index]}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
