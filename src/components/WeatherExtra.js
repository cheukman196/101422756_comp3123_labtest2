import React, { useContext, useState } from 'react'
import { WeatherContext } from '../contexts/weatherContext'
import LocationSelect from './LocationSelect'
import '../Weather.css'; 

export default function WeatherExtra() {

    let {weather, datetime, isLoading } = useContext(WeatherContext)

    if(isLoading){
        <p>Loading Weather data ...</p>
    }

    if (!weather || !datetime)
        <p>Weather Data not available. Please retry again soon.</p>

    if (!isLoading){
        return (
            <div className="weather-extra-container">
            <div className="weather-block">
                <h5>Wind</h5>
                <p>Wind: {weather.wind.speed} km/h</p>
                {weather.wind.gust ? <p>Gust: {weather.wind.gust} km/h</p> : ""}
            </div>
            <div className="weather-block">
                <h5>Humidity</h5>
                <p>{weather.main.humidity}%</p>
            </div>
            <div className="weather-block">
                <h5>Pressure</h5>
                <p>{(weather.main.pressure / 10).toFixed(1)} kPa</p>
            </div>
            <div className="weather-block">
                <h5>Visibility</h5>
                <p>{(weather.visibility / 1000).toFixed(1)} km</p>
            </div>
            <div className="weather-block">
                <h5>Select Location:</h5> 
                <LocationSelect/>
            </div>
        </div>
        )
    }
}
