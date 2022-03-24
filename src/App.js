import React, {useState, useEffect} from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>NASA Photo Of The Day</h1>
      <img></img>

      <p>
        Insert photo description here from data <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <button>I need some space!</button>
    </div>
  );
}

export default App;
