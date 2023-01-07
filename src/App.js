import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import HeadlineCards from "./components/HeadlineCards";
import Flights from "./components/Flights";
import Heroi from "./components/InfoPage/Heroi";
import ImageSlider from "./components/InfoPage/ImageSlider";

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <HeadlineCards />
      <Flights />
      <Heroi />
    </div>
  );
}

export default App;
