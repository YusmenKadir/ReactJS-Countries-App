import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Appbar";
import Countries from "./components/Countries";
import CountryPicker from "./components/CountryPicker";

const App = () => {
  const [selectedRegion, setSelectedRegion] = useState(null);

  const regionPickUpHandler = (region) => {
    setSelectedRegion(region);
  };

  const resetRegionHandler = () => {
    setSelectedRegion(null);
  };

  return (
    <div className="App">
      <Navbar />
      {selectedRegion ? (
        <Countries
          resetRegionHandler={resetRegionHandler}
          selectedRegion={selectedRegion}
        />
      ) : (
        <CountryPicker regionPickUpHandler={regionPickUpHandler} />
      )}
    </div>
  );
};

export default App;
