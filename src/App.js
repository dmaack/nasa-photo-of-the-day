import React from "react";
import "./App.css";
import PhotoCard from './Components/PhotoCard';

function App() {
  return (
    <div className="App">
      <div className='card-container'>
      <h1>NASA Astronomy Photo of the Day</h1>
      <p>Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer.</p>
      <PhotoCard />
      </div>
    </div>
  );
}

export default App;
