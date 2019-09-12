import React from "react";
import "./App.css";
import PhotoList from './Components/PhotoList';

function App() {
  return (
    <div className="App">
      <div>
        
      </div>
      <h1>NASA Astronomy Photo of the Day</h1>
      <p>Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer.</p>
      <PhotoList />
    </div>
  );
}

export default App;
