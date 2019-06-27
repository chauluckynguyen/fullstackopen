import React, {useState, useEffect} from 'react'
import axios from 'axios'

// Components
import WeatherForecast from '../WeatherForecast'

const Weather = ({ capital }) => {
    const [weather, setWeather] = useState('')

    useEffect(() => {
        axios
            .get(`http://api.apixu.com/v1/current.json?key=54df5a2634c6494e80d210337192706&q=${capital}`)
            .then(response => setWeather(response.data))
    }, [capital])

    return (
        <div>
            <h2>Weather in {capital}</h2>
            <WeatherForecast weather={weather} />
        </div>
    )
}

export default Weather