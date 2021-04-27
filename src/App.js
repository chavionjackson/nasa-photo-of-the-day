import React, {useState, useEffect} from "react";
import ReactPlayer from 'react-player'
import axios from 'axios'
import "./App.css";
import AllContent from "./Components/All";

function App() {
  const [data, setData] = useState({});
    useEffect(() => {
      axios.get(`https://api.nasa.gov/planetary/apod?api_key=veqCDxDtV1bhezyNfJugUuxpcHXy5rbQAsTfmSQz`)
      .then(res => {
        console.log(res);
        setData({video: res.data.url, description: res.data.explanation, header: res.data.title})
      })
      .catch(err => {
        console.log('missing data!', err)
      })
    }, []);
    console.log(data)

  return (
    <div className="App">
    <h1>Hello Mr. Jackson!</h1>
    <ReactPlayer url = "https://www.youtube.com/embed/ubBzcSD8G8k?rel=0"/>
    <AllContent data = {data}/>
    </div>
  );
}

export default App;
