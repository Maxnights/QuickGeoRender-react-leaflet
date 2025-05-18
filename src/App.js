import { Map } from "./components/Map";
import React from "react";
import reacticon from "./assets/reacticon.png";
import LeafLetLogo from "./assets/leafletlogo.png";

function App() {
  return (
    <div className="App">
      <header className="app-nav">
        <img src={LeafLetLogo} alt="Leaflet logo" className="logo-mid" />
        <img src={reacticon} alt="React logo" className="logo-small" />
      </header>
      <Map />
    </div>
  );
}
export default App;
