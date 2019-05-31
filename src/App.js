import React from "react";
import "./App.css";
import TestMap from "./components/map/map";

function App() {
  // console.log(process.env.REACT_APP_GOOGLE_KEY)
  return (
    <div className="App">
      <div>Intelliflight map</div>
      <TestMap />
    </div>
  );
}

export default App;