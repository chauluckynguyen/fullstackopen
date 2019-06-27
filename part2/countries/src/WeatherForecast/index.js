import React from 'react'

const WeatherForecast = ({weather}) => {
    if (!weather) {
        return (
            <div></div>
        )
    }

    return (
        <div>
            <p>temperature: {weather.current.temp_c} Celsius</p>
            <img src={weather.current.condition.icon} alt="Weather Icon"/>
            <p>wind: {weather.current.wind_kph} kph direction {weather.current.wind_dir}</p>
        </div>
    )
}

export default WeatherForecast