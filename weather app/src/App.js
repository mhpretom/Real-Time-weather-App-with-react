

import React,{useEffect,useState} from "react";
import WeatherCard from "./WeatherCard.js";
import "./style.css";

const API_URL="https://api.openweathermap.org/data/2.5/weather?APPID=a3021ff997b8e4d89cd9848175127426";
function App() {
  const [city,setCity]=useState("");
  const [value,setValue]=useState({});
  const getWeatherInfo=async(cityName)=>{
    const response=await fetch(`${API_URL}&q=${cityName}&units=metric`);
    const data=await response.json();
    const temp=data.main?.temp;
    const humidity=data.main?.humidity;
    const weathermood=data.weather[0]?.main;
    const feelsLike=data.main?.feels_like;
    const weatherData={
      temp,
      humidity,
      weathermood,
      feelsLike,
    }
    setValue(weatherData);
  }
  useEffect(()=>{
    getWeatherInfo("pune");
  },[]);
  return (
    <div className="App">
       <h1 className="header">Weather in</h1>
                <div className="input-container">
                <input type="text" placeholder="Enter City"className="input-style"
                value={city}
                onChange={(event)=>{
                  setCity(event.target.value);
                }}></input>
                <button className="btn"
                onClick={()=>{
                  getWeatherInfo(city)
                }}>search</button>
                </div>
      <WeatherCard value={value}/>
    </div>
  );
}

export default App;
