import React, {useState, useEffect} from "react";
import axios from 'axios'
import "./App.css";
import AllContent from "./Components/All";
import styled from 'styled-components'
import Button from './Buttons';
import ReactPlayer from 'react-player'

const Style = styled.div`
  background-color: black;
  color: #ba1e68;
  padding-bottom: 2rem;
`;

const TitleStyle = styled.div`
  font-size: 4rem;
  padding: 3rem;
`;

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
    <Style className="App">
    <TitleStyle>NASA Video!</TitleStyle>
    <ReactPlayer url = "https://www.youtube.com/embed/ubBzcSD8G8k?rel=0" top width = '100%' alt = 'NASA video'/>
    <AllContent data = {data}/>
    <Button>Space</Button>
      <Button>Stars</Button>
      <Button>Planets</Button>
      <Button>Beyond</Button>
    </Style>
  );
}

export default App;
