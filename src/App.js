import React, {useState, useEffect} from "react";
import "./App.css";
import Header from "./components/Header";
import Description from "./components/Description";
import Photo from "./components/Photo";

function App() {

  const [data, setData] = useState(null);

  useEffect(() => {
    
  }, [])

  return (
    <div className="App">
      <Header />
      <Photo />
      <Description />
      <button>I need some space!</button>
    </div>
  );
}

export default App;
