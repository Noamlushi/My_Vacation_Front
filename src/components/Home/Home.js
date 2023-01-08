import React from "react";
import Flights from "./Flights";
import HeadlineCards from "./HeadlineCards";
import Hero from "./Hero";
const Home = () => {
  return (
    <div>
      <Hero />
      <HeadlineCards />
      <Flights />
    </div>
  );
};

export default Home;
