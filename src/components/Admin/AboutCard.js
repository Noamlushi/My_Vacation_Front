import React from "react";

const AboutCard = (props) => {
  return (
    <div className=" group cursor-pointer flex flex-col border text-left rounded-2xl py-12 px-8 hover:scale-105 duration-300 hover:bg-blue-500 hover:ring-sky-500 ">
      <div>
        <div className="bg-slate-200 inline-flex p-2 rounded-full text - text-blue-600">
          {props.icon}
        </div>
        <h3 className="text-xl font-bold py-4 group-hover:text-white ">
          {props.heading}
        </h3>
        {/* <p className=" group-hover:text-white">{props.text}</p> */}
      </div>
    </div>
  );
};

export default AboutCard;
