import React from 'react'

const CountryItem = ({country, buttonHandler}) => {
    return (
        <div><span>{country.name}</span> <button onClick={buttonHandler} country={country.name}>Show</button></div>
    )
}

export default CountryItem