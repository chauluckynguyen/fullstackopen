import React from 'react'

// Components
import CountryItem from '../CountryItem'

const CountryList = ({countries, buttonHandler}) => {
    return (
        <div>
            { countries && countries.map(country => <CountryItem key={country.name} country={country} buttonHandler={buttonHandler} />) }
        </div>
    )
}

export default CountryList