import React, {useState, useEffect} from "react";
import "./App.css";
import Header from "./components/Header";
import Description from "./components/Description";
import Photo from "./components/Photo";
import axios from "axios";

function App() {

  const [data, setData] = useState({});

  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=ZRC0MOoPySLD5PWiPvH6lgRqxvJ4aJdZnDYkJZm6")
    .then(res => {
      console.log(res.data);
      setData(res.data);
    })
    .catch(err => {
      console.error(err);
    })
  }, [])

  return (
    <div className="App">
      <Header />
      <Photo data={data}/>
      <Description data={data}/>
      <button>I need some space!</button>
    </div>
  );
}

export default App;
