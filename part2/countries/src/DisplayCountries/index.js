import React from 'react'

// Components
import Country from '../Country'
import CountryList from '../CountryList'

const DisplayCountries = ({ countries, filter, buttonHandler }) => {
    const filteredCountries = countries.filter(country => country.name.toLowerCase().includes(filter.toLowerCase().trim()))
    
    const displayResult = () => {  
        if (filteredCountries.length === 1) {
            return <Country country={filteredCountries[0]} />
        } else if (filteredCountries.length < 10) {
            return <CountryList countries={filteredCountries} buttonHandler={buttonHandler} />
        } else {
            return <p>Too many matches, specificy another filter</p>
        }
    }

    return (
        <div>
            { displayResult() }
            </div>
    )
}

export default DisplayCountries