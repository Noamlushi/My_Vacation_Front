import React from "react";

const HeadlineCards = () => {
  return (
    <div className="max-w-[2000px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      {/* Card */}
      <div className="rounded-xl relative">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">France Paris</p>
          <p className="px-2">26/11/23 - 30/11/23</p>
          <button className="border-blue-600  font-semibold bg-blue-600 rounded-md text-white mx-2 absolute bottom-3 px-4">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80"
          alt="/"
        />
      </div>

      <div className="rounded-xl relative">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">Thailand Bangkok</p>
          <p className="px-2">2/3/23 - 21/3/23</p>
          <button className="border-blue-600  font-semibold bg-blue-600 rounded-md text-white mx-2 absolute bottom-3 px-4">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-center rounded-xl"
          src="https://images.unsplash.com/photo-1563492065599-3520f775eeed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          alt="/"
        />
      </div>
      {/* Card */}
      <div className="rounded-xl relative">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">
            United Arab Emirates Dubai
          </p>
          <p className="px-2">2/8/23 - 7/8/23</p>
          <button className="border-blue-600  font-semibold bg-blue-600 rounded-md text-white mx-2 absolute bottom-3 px-4">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.unsplash.com/flagged/photo-1559717865-a99cac1c95d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
          alt="/"
        />
      </div>
    </div>
  );
};

export default HeadlineCards;
