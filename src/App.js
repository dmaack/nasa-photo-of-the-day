import React from "react";
import "./App.css";
import PhotoCard from './Components/PhotoCard';

import logo from './nasaLogo.png'





function App() {
  return (
    <div className="App">
      <div className='App-header'>
        <img className='App-logo' src={logo} alt='NASA Logo'/>
        <h1>NASA Astronomy Photo of the Day</h1>
        <p>Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer.</p>
      </div>

      <PhotoCard />

    </div>
  );
}

export default App;
