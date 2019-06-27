import React from 'react'

// Components
import Weather from '../Weather'

const Country = ({country}) => {
    return (
        <div>
            <h1>{country.name}</h1>
            <p>
                capital {country.capital}<br/>
                population {country.population}
            </p>
            <h2>languages</h2>
            <ul>
                {
                    country.languages && 
                    country.languages.map(language => 
                        <li key={language.name}>{language.name}</li>
                    )
                }
            </ul>

            <img src={country.flag} alt="country flag" width="120px" />

            <Weather capital={country.capital} />
        </div>

    )
}

export default Country