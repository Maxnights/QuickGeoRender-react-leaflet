import { Map } from './components/Map';
import React from 'react';
function App() {
  return (
    <div className="App">
      <header className="app-nav">
        <img src="/leaflet-logo.png" alt="Leaflet logo" className="logo-mid" />
        <img src="/react-logo.png" alt="React logo" className="logo-small" />
      </header>
      <Map />
    </div>
  );
}
export default App;
