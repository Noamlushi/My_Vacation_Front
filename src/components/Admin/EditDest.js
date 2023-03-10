import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

function EditDest(props) {
  const params = useParams();
  const [formData, setFormData] = useState(null);
  // const location = useLocation();

  //datesvar

  useEffect(() => {
    fetch("http://localhost:8000/flight/" + props.id)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        setFormData({
          _id: props.id,
          name: data.name,
          date: data.date,
          boarding: data.boarding,
          landing: data.landing,
          continent: data.category,
          image: data.image,
          price: data.price,
          info: data.info,
          priceTicket: data.priceTicket,
          gallery_1: data.gallery[0],
          gallery_2: data.gallery[1],
          gallery_3: data.gallery[2],
          gallery_4: data.gallery[3],
          attraction_1_name: data.attractions[0].attraction,
          attraction_1_url: data.attractions[0].url,
          attraction_2_name: data.attractions[1].attraction,
          attraction_2_url: data.attractions[1].url,
          attraction_3_name: data.attractions[2].attraction,
          attraction_3_url: data.attractions[2].url,
          attraction_4_name: data.attractions[3].attraction,
          attraction_4_url: data.attractions[3].url,
          attraction_5_name: data.attractions[4].attraction,
          attraction_5_url: data.attractions[4].url,
        });
      });
  }, []);

  const Cost_of_living = ["$", "$$", "$$$", "$$$$"];

  const continents = [
    "Asia",
    "Africa",
    "North America",
    "South America",
    "Europe",
    "Australia",
  ];

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    submitFormData(formData);
  };

  const submitFormData = (formData) => {
    // console.log(formData);
    axios
      .post("http://localhost:8000/flight/updateFlight", formData)
      .then((response) => {
        console.log(response.data);
        setFormData({
          _id: "",
          name: "",
          date: "",
          boarding: "",
          landing: "",
          continent: "",
          image: "",
          price: "",
          info: "",
          priceTicket: 0,
          gallery_1: "",
          gallery_2: "",
          gallery_3: "",
          gallery_4: "",
          attraction_1_name: "",
          attraction_1_url: "",
          attraction_2_name: "",
          attraction_2_url: "",
          attraction_3_name: "",
          attraction_3_url: "",
          attraction_4_name: "",
          attraction_4_url: "",
          attraction_5_name: "",
          attraction_5_url: "",
        });
      })
      .catch((error) => {
        console.error(error);
      });
    // here you can send the form data to your API
  };

  return (
    formData && (
      <div className="relative mt-2 flex-col justify-center min-h-screen overflow-hidden">
        <div className="w-[80%] p-6 m-auto bg-white rounded-md shadow-md ">
          <h1 className="text-3xl font-semibold text-center text-blue-700 ">
            Update {formData.name} Flight
          </h1>
          <form className="mt-6" onSubmit={handleSubmit}>
            <div className="grid w-full grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-7 mt-7 ">
              <div className="mb-2">
                <label
                  htmlFor="Name"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Name
                </label>
                <input
                  value={formData.name}
                  onChange={handleChange}
                  name="name"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="Date"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Date (dd/mm/yy)
                </label>
                <input
                  value={formData.date}
                  onChange={handleChange}
                  name="date"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="Boarding"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Boarding (hh:mm)
                </label>
                <input
                  value={formData.boarding}
                  onChange={handleChange}
                  name="boarding"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="Landing"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Landing (hh:mm)
                </label>
                <input
                  value={formData.landing}
                  onChange={handleChange}
                  name="landing"
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
                <select
                  value={formData.continent}
                  onChange={handleChange}
                  name="continent"
                  className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                >
                  {continents.map((option) => (
                    <option
                      key={option}
                      value={option}
                      className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    >
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-2">
                <label
                  htmlFor="imgUrl"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Img url
                </label>
                <input
                  value={formData.image}
                  onChange={handleChange}
                  name="image"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>{" "}
              <div className="mb-2">
                <label
                  htmlFor="Cost of living"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Cost of living
                </label>
                <select
                  value={formData.price}
                  onChange={handleChange}
                  name="price"
                  className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                >
                  {Cost_of_living.map((option) => (
                    <option
                      key={option}
                      value={option}
                      className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    >
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-2">
                <label
                  htmlFor="Description"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Description
                </label>
                <textarea
                  className="resize-none w-full h-[170px] px-4 py-4 text-base outline-none text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Start typing here ..."
                  name="info"
                  value={formData.info}
                  onChange={handleChange}
                />
                {/* <input
                  value={formData.info}
                  onChange={handleChange}
                  name="info"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                /> */}
              </div>{" "}
              <div className="mb-2">
                <label
                  htmlFor="priceTicket"
                  className="block text-sm font-semibold text-gray-800"
                >
                  priceTicket
                </label>
                <input
                  value={formData.priceTicket}
                  onChange={handleChange}
                  name="priceTicket"
                  type="number"
                  className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="gallery-1"
                  className="block text-sm font-semibold text-gray-800"
                >
                  gallery-1
                </label>
                <input
                  value={formData.gallery_1}
                  onChange={handleChange}
                  name="gallery_1"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="gallery-2"
                  className="block text-sm font-semibold text-gray-800"
                >
                  gallery-2
                </label>
                <input
                  value={formData.gallery_2}
                  onChange={handleChange}
                  name="gallery_2"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="gallery-3"
                  className="block text-sm font-semibold text-gray-800"
                >
                  gallery-3
                </label>
                <input
                  value={formData.gallery_3}
                  onChange={handleChange}
                  name="gallery_3"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="gallery-4"
                  className="block text-sm font-semibold text-gray-800"
                >
                  gallery-4
                </label>
                <input
                  value={formData.gallery_4}
                  onChange={handleChange}
                  name="gallery_4"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="attraction-1-name"
                  className="block text-sm font-semibold text-gray-800"
                >
                  attraction-1-name
                </label>
                <input
                  value={formData.attraction_1_name}
                  onChange={handleChange}
                  name="attraction_1_name"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="attraction-1-url"
                  className="block text-sm font-semibold text-gray-800"
                >
                  attraction-1-url
                </label>
                <input
                  value={formData.attraction_1_url}
                  onChange={handleChange}
                  name="attraction_1_url"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="attraction-1-name"
                  className="block text-sm font-semibold text-gray-800"
                >
                  attraction-2-name
                </label>
                <input
                  value={formData.attraction_2_name}
                  onChange={handleChange}
                  name="attraction_2_name"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="attraction-1-url"
                  className="block text-sm font-semibold text-gray-800"
                >
                  attraction-2-url
                </label>
                <input
                  value={formData.attraction_2_url}
                  onChange={handleChange}
                  name="attraction_2_url"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="attraction-1-name"
                  className="block text-sm font-semibold text-gray-800"
                >
                  attraction-3-name
                </label>
                <input
                  value={formData.attraction_3_name}
                  onChange={handleChange}
                  name="attraction_3_name"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="attraction-1-url"
                  className="block text-sm font-semibold text-gray-800"
                >
                  attraction-3-url
                </label>
                <input
                  value={formData.attraction_3_url}
                  onChange={handleChange}
                  name="attraction_3_url"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="attraction-1-name"
                  className="block text-sm font-semibold text-gray-800"
                >
                  attraction-4-name
                </label>
                <input
                  value={formData.attraction_4_name}
                  onChange={handleChange}
                  name="attraction_4_name"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="attraction-1-url"
                  className="block text-sm font-semibold text-gray-800"
                >
                  attraction-4-url
                </label>
                <input
                  value={formData.attraction_4_url}
                  onChange={handleChange}
                  name="attraction_4_url"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="attraction-1-name"
                  className="block text-sm font-semibold text-gray-800"
                >
                  attraction-5-name
                </label>
                <input
                  value={formData.attraction_5_name}
                  onChange={handleChange}
                  name="attraction_5_name"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="attraction-1-url"
                  className="block text-sm font-semibold text-gray-800"
                >
                  attraction-5-url
                </label>
                <input
                  value={formData.attraction_5_url}
                  onChange={handleChange}
                  name="attraction_5_url"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
            </div>{" "}
            <div className="mt-6">
              <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                submit
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
}

export default EditDest;
