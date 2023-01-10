import React from "react";
// import Flights from "./Flights";
import HeadlineCards from "./HeadlineCards";
import Hero from "./Hero";
import About from "./About";
import Footer from "../Fotter";
const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <HeadlineCards />
      <Footer />

      {/* <Flights /> */}
    </div>
  );
};

export default Home;
