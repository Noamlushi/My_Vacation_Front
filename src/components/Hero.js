import React from "react";

const Hero = () => {
  return (
    <div className="max-w mx-auto p-4">
      <div className="max-h relative">
        {/* Overlay */}
        <div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center">
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            The <span className="text-blue-600">Best</span>
          </h1>
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            {" "}
            <span className="text-stone-500">Way</span> TO Travel
          </h1>
        </div>
        <img
          className="w-full max-h-[400px] object-cover object-center"
          src="https://images.unsplash.com/photo-1572986350786-002d08b6b87e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
          alt="/"
        />
      </div>
    </div>
  );
};

export default Hero;
