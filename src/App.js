import React from "react";
import "./App.css";
import PhotoList from './Components/PhotoList';

function App() {
  return (
    <div className="App">
      <h1>NASA Astronomy Photo of the Day</h1>
      <PhotoList />
    </div>
  );
}

export default App;
