import React from "react";

const Heroi = () => {
  return (
    <div className="w-full h-full">
      <img
        className="top-0 left-0 w-full h-96 object-cover"
        src="https://images.pexels.com/photos/38238/maldives-ile-beach-sun-38238.jpeg"
        alt="/"
      />
      <div className="bg-stone-700 absolute  left-0 w-full  h-full" />
      <div className=" w-full h-full absolute  flex-col justify-center text-white">
        <div className="md:left-[10%] max-w-[1100px] m-auto absolute p-4">
          <p>Sunbathing</p>
          <h1 className="font-bold text-5xl md:text-7xl drop-shadow-2xl">
            <span className="text-blue-600 text-8xl">T</span>he Maldives{" "}
          </h1>
          <p className="max-w-[900px] drop-shadow-2xl py-2 text-xl">
            The Maldives is the ultimate paradise destination, the one we all
            dream of visiting. Renowned for its spectacular beaches and
            luxurious hotels, it’s a bucket list destination for a reason. In
            the heart of the Indian Ocean, this tropical archipelago is of
            thousands of islands, clustered into larger atolls. Most Maldives
            travel packages start and end in the capital, Male, where you can
            hop aboard a water plane or speedboat to head to your idyllic island
            getaway. The Maldives resort vacation packages all but guarantee an
            incredibly special vacation, so you just need to choose: barefoot
            luxury, all-out glamor, family-friendly fun, or another version of
            bliss.
          </p>

          <h2 className="  font-bold text-lg md:text-3xl drop-shadow-xl">
            Top <span className="text-blue-600">5</span> Attractions
          </h2>
          <ul className="list-disc   ">
            <li>Alimatha Island</li>
            <li>Alimatha Island</li>
            <li>Alimatha Island</li>
            <li>Alimatha Island</li>
            <li>Alimatha Island</li>
          </ul>

          <button className="bg-white text-black ">Reserve Now</button>
        </div>
      </div>
    </div>
  );
};

export default Heroi;
