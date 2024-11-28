import React, { useContext, useState, useRef, useEffect } from 'react'
import { WeatherContext } from '../contexts/weatherContext'

export default function WeatherHome() {
    const [currLocation, setCurrLocation] = useState('Toronto')
    const locList = ["Ajax", "Brampton", "Berlin", "Cairo", "Etobicoke", "Hong Kong", 
                    "Ho Chi Minh", "Istanbul", "London", "Markham", "Mississauga", "Newmarket", 
                    "North York", "Oshawa", "Richmond Hill", "Tokyo", "Toronto", "Vaughan" ]

    let {setLocation, isLoading} = useContext(WeatherContext)
    var locationRef = useRef()

    const handleInput = (e) => {
        const data = locationRef.current.value
        setCurrLocation(data)
        setLocation(data)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    useEffect(() => {
        console.log(currLocation)
    }, [currLocation])

    return (
        <div>           
            <form onSubmit={handleSubmit}>
                <select name='location' id='location' ref={locationRef} value={currLocation} onChange={handleInput}>
                    { 
                        locList.map(loc => (
                        <option key={loc} value={loc}>{loc}</option>
                        ))
                    }
                </select>
            </form>
        </div>
    )
    
}
