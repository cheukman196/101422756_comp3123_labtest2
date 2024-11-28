import React, { useContext, useEffect, useState } from 'react'
import LocationSelect from './LocationSelect'
import { WeatherContext } from '../contexts/weatherContext'
import '../Weather.css'; 

export default function WeatherHome() {

    let {weather, datetime, isLoading, location} = useContext(WeatherContext)

    useEffect(() => {
        }, [location])

    if(isLoading){
        <p>Loading Weather data ...</p>
    }

    if (!weather || !datetime || !weather.main || weather.weather == undefined)
        <p>Weather Data not available. Please retry again soon.</p>

    if (!isLoading){
        return (
                
            <div className="weather-home">
                <div className="weather-main-block">
                    <h3 className="weather-location">{weather.name}</h3>
                    <p className="weather-date-time">
                        {datetime.dayOfWeek}, {datetime.time}
                    </p>
                    <p className="weather-date">{datetime.date}</p>
                    <p className="weather-description">{weather.weather[0].main}</p>
                    <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}></img>
                    <p className="weather-temp">
                        {weather.main.temp.toFixed(1)}&#176;C 
                    </p>
                    <p> 
                        <span className="weather-feels-like">(Feels like {weather.main.feels_like.toFixed(1)}&#176;C)</span>
                    </p>
                    <p className="weather-range">
                        H: {weather.main.temp_min.toFixed(1)}&#176;C&#9;L:{weather.main.temp_max.toFixed(1)}&#176;C
                    </p>
                </div>
            </div>
        )
    }
}
