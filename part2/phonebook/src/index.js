import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

// Components
import Filter from './Filter'
import PersonForm from './PersonForm'
import Persons from './Persons'

const App = () => {
    const [persons, setPersons] = useState([])

    const [filterValue, setFilterValue] = useState('')
    
    const [ values, setValues ] = useState({
        name: '', 
        number: ''
    })

    useEffect(() => {
        console.log("effect")
        axios
            .get('http://localhost:3001/persons')
            .then(response => {
                console.log("promise fulfilled!")
                setPersons(response.data)
            })
    }, [])
    console.log('render', persons.length, 'persons')

    const handleChange = (e) => {
        setValues({
            ...values, 
            [e.target.name]: e.target.value
        })
    }

    const handleFormSubmission = (e) => {
        e.preventDefault() 
        const newPerson = {
            name: values.name,
            number: values.number
        }
        if(persons.some(person => person.name.toLowerCase() === values.name.toLowerCase())) {
            alert(`${values.name} is already added to phonebook`)            
        } else {
            setPersons(persons.concat(newPerson))            
        }
        setValues({
            name: '', 
            number: ''
        })
    }

    const personsFiltered = persons.filter(person => (person.name.toLowerCase()).includes(filterValue.toLowerCase().trim()))

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter 
                value={filterValue} 
                onChange={e => setFilterValue(e.target.value)} 
            />
            <h3>add a new</h3>
            <PersonForm 
                onSubmit={handleFormSubmission} 
                nameValue={values.name} 
                numValue={values.number} 
                onChange={handleChange} 
            />
            <h3>Numbers</h3>
            <Persons persons={personsFiltered} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
