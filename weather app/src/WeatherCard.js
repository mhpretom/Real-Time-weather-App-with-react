
import React,{useEffect,useState} from "react";

const WeatherCard=({value})=>{
    const [weatherMood,setWeatherMood]=useState("");

    useEffect(()=>{
        if(value.weathermood)
        {
            switch(value.weathermood){
                case "Clear":
                    setWeatherMood("wi wi-day-sunny");
                    break;
                case "Haze":
                    setWeatherMood("wi wi-day-haze");
                    break;
                case "Clouds":
                    setWeatherMood("wi wi-day-cloudy");
                    break;
                default:setWeatherMood("wi-day-sunny");
            }
        }
    },[value.weathermood])
    return(
        <div>
            <div className="container">
                <div className="weather-container">
                    <div className="header-image">
                        <img src="night_image.svg" alt="...." className="image-style" />
                    </div>
                    <div className="weather-details">
                        <div className="temp-details">
                            <h1 className="degree">{value.temp}<sup>o</sup>c</h1>
                            <h1 className="weathermood">{value.weathermood}</h1>
                        </div>
                        <div className="weather-icon">
                            <i className={weatherMood}></i>
                        </div>
                        <div className="temp-feel-details">
                            <h1 className="degree1">{value.feelsLike}<sup>o</sup>c</h1>
                            <h1 className="weathermood1">{value.humidity} %</h1>
                        </div>
                        <div className="temp-text">
                            <p className="feel-text">Feels like</p>
                            <p className="humidity">Humidity</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherCard;