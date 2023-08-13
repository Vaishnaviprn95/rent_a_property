import React from 'react';
import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/search";

import PropertyCard from "./components/Data/PropertyCard";
import Hero from "./components/filter";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      <Hero />
      {/* <PropertyCard /> */}
    </div>
  );
}

export default App;
