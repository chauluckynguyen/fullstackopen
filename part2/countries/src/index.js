import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'

// Components
import DisplayCountries from './DisplayCountries'

const App = () => {
    const [countries, setCountries] = useState([])
    const [filterValue, setFilterValue] = useState('')

    useEffect(() => {
        axios  
            .get('https://restcountries.eu/rest/v2/all')
            .then(response => setCountries(response.data))        
    }, [])

    const handleInputChange = (e) => {
        setFilterValue(e.target.value)
    }

    const handleButtonClick = (e) => {
        setFilterValue(e.target.attributes.country.value)
    }

    return (
        <div>
            find countries 
            <input 
                value={filterValue} 
                onChange={handleInputChange}
            />
            <DisplayCountries 
                countries={countries} 
                filter={filterValue} 
                buttonHandler={handleButtonClick} 
            />
        </div>

    )
}

ReactDOM.render(<App />, document.getElementById('root'));
