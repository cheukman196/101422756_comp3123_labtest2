import React, { createContext, useState, useEffect } from 'react'

// To share data among components without passing props

const WeatherContext = createContext()

const WeatherProvider = ({ children }) => {
    const [weather, setWeather] = useState({})
    const [datetime, setDateTime] = useState({date: null, time: null, dayOfWeek: null})
    const [isLoading, setIsLoading] = useState(true)
    const [location, setLocation] = useState('Toronto')

    // get simplified date, time, day of week values
    const calcDate = (dt, timezone) => {
        const utcDate = new Date(dt * 1000); 
        // can't seem to get the time right, manually adding seconds to adjust time
        const localDate = new Date(utcDate.getTime() + (timezone * 1000 + (3600 * 1000 * 5))); 
    
        const date = localDate.toISOString().split("T")[0];
        const dayOfWeek = localDate.toLocaleDateString("en-US", { weekday: "long" }); 
        const time = localDate.toLocaleTimeString("en-US", { hour: '2-digit', minute: '2-digit', hour12: false }); 

        setDateTime({date: date, time: time, dayOfWeek: dayOfWeek})
      };

    const fetchWeatherData = async() =>{
        try {
            const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=67e01b4a1698ee4c9df39490d6391f6e`)
            const data = await response.json()
            setWeather(data)
            calcDate(data.dt, data.timezone)
        } catch(err){
            console.error(err)
        } finally {
            setIsLoading(false)
        };
    }
    
    useEffect(() => {
        fetchWeatherData()
    }, [location])

    return (
        <WeatherContext.Provider value={{ weather, datetime, location, isLoading, setLocation }}>
            {children}
        </WeatherContext.Provider>
    )
}

export {WeatherContext, WeatherProvider}
