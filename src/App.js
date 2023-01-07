import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import HeadlineCards from "./components/HeadlineCards";
import Flights from "./components/Flights";

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <HeadlineCards />
      <Flights />
    </div>
  );
}

export default App;
