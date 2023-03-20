import React, { useState, useEffect } from "react";
function OrderSummary() {
  const [orderData, setorderData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/allOrders")
      .then((response) => response.json())
      .then((data) => {
        setorderData(data);
      });
  }, []);

  const DateFormat = (date) => {
    const originalDate = new Date(date);
    // extract the individual date and time components
    const day = originalDate.getUTCDate();
    const month = originalDate.getUTCMonth() + 1; // add 1 to convert from zero-based index to one-based index
    const year = originalDate.getUTCFullYear();
    const hour = originalDate.getUTCHours();
    const minute = originalDate.getUTCMinutes();
    const newDateString = `${day}/${month}/${year} ${hour}:${minute}`;
    return newDateString;
  };

  return (
    <div>
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      First Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Last Name
                    </th>
                    {/* <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Title
                    </th> */}
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Address
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Phone
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Date
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Summary
                    </th>
                    {/* <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Date</span>
                    </th> */}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {orderData.map((item, index) => (
                    // <div key={index}>
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap ">
                        <div className="text-sm font-bold text-center   text-gray-900">
                          {item.FirstName}
                        </div>
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap ">
                        <div className="text-sm font-bold text-center   text-gray-900">
                          {item.LastName}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap ">
                        <div className="text-sm font-bold text-center   text-gray-900">
                          {item.Address}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap ">
                        <div className="text-sm font-bold text-center   text-gray-900">
                          {item.Phone}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap ">
                        <div className="text-sm font-bold text-center   text-gray-900">
                          {DateFormat(item.Date)}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap ">
                        <div className="text-sm font-bold text-center   text-blue-600">
                          {item.Total}$
                        </div>
                      </td>
                    </tr>
                  ))}

                  {/* ))} */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;
