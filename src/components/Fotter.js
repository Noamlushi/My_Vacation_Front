import React from "react";
import { FaFacebook, FaInstagram, FaTripadvisor } from "react-icons/fa";
import { TiSocialPinterest } from "react-icons/ti";

const Footer = () => {
  return (
    <div className=" inset-x-0 bottom-0  h-[200]  w-full mt-24 bg-stone-900 text-gray-300 py-2 px-2">
      <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-blue-600 py-8 px-4">
        <div className="col-span-2 py-8 md:pt-2">
          {/* <p className="font-bold uppercase">Subscribe to our newsletters</p>
          <p className="py-4">
            The Latest deals, articles and resources sent to your inbox weekly.
          </p> */}
          {/* <form className="flex flex-col sm:flex-row">
            <input
              className="w-full p-2 mr-4 rounded-md mb-4"
              type="email"
              placeholder="Enter email.."
            />
            <button className="p-2 mb-4 rounded-md">Subscribe</button>
          </form> */}
        </div>
      </div>

      <div className="flex flex-col max-w-[1400px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-blue-600">
        <p className="py-4">2023 N&H, LLC. All rights reserved</p>
        <div className="flex justify-between sm:w-[300px] pt-4 text-2xl">
          <FaFacebook />
          <FaInstagram />
          <a
            target="_blank"
            href="https://www.tripadvisor.com/Tourism-g294458-Bucharest-Vacations.html"
          >
            <FaTripadvisor />
          </a>
          <TiSocialPinterest size={30} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
