import React, { useState, useEffect } from "react";
import { FaTrashAlt } from "react-icons/fa";

export default function UserEdit() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/allUsers")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  // return data.map((userdata, index) => userdata.user.user.email);
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
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    {/* <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Title
                  </th> */}
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      PERMISSION
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Amount spent
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {data.map((userdata) => (
                    <tr key={userdata._id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img
                              className="h-10 w-10 rounded-full"
                              src="https://cdn-icons-png.flaticon.com/512/6386/6386976.png"
                              alt=""
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {userdata.name}
                            </div>
                            <div className="text-sm text-gray-500">
                              {}
                              {userdata.user.user.email}
                            </div>
                          </div>
                        </div>
                      </td>
                      {/* <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {person.title}
                      </div>
                      <div className="text-sm text-gray-500">
                        {person.department}
                      </div>
                    </td> */}
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className="px-2 inline-flex text-xs leading-5
                    font-semibold rounded-full bg-green-100 text-green-800"
                        >
                          Admin
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {userdata.role}
                      </td>
                      {/* <td className="px-1 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a
                          className="text-indigo-600 hover:text-indigo-900"
                          href="UserEdit"
                        >
                          Edit
                        </a>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a href="#" className="text-red-600 hover:text-red-900">
                          <FaTrashAlt size={15} className="" />
                        </a>
                      </td> */}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="  container mx-auto w-5/6 md:w-2/3 h-full">
        {/* Code block starts */}
        <div className="mt-8 bg-white dark:bg-gray-800 py-4 flex flex-col sm:flex-rowt sm:items-center justify-between px-5 sm:px-10 shadow rounded-t">
          <div className="flex items-center mb-4 sm:mb-0 md:mb-0 lg:mb-0 xl:mb-0">
            <div className="ml-2">
              <h2 className=" text-stone-700 dark:text-gray-100 text-xl  font-bold">
                Total Profit:
              </h2>
              <h2 className=" text-center text-blue-700 dark:text-gray-100 text-xl  font-bold">
                200$
              </h2>
            </div>
          </div>
          <div></div>
        </div>
        {/* Code block ends */}
      </div>
    </div>
  );
}
