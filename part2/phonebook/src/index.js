import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import personService from './services/persons'

// Components
import Filter from './Filter'
import PersonForm from './PersonForm'
import Persons from './Persons'
import Notification from './Notification'

const App = () => {
    const [ persons, setPersons ] = useState([])
    const [ filterValue, setFilterValue ] = useState('')
    const [ status, setStatus ] = useState({
        message: null, 
        type: null
    })    
    const [ value, setValue ] = useState({
        name: '', 
        number: ''
    })

    useEffect(() => {
        personService
            .getAll()
            .then(initialPersons => {
                setPersons(initialPersons)
            })
            .catch(error => {
                const errorMessage = {
                    message: error.response.data.message,
                    type: 'error'
                }
                setStatus(errorMessage)
                setTimeout(() => {
                    setStatus(null)
                }, 5000)
                console.log(error.response)
            })

    }, [])

    const handleChange = (e) => {
        setValue({
            ...value, 
            [e.target.name]: e.target.value
        })
    }

    const handleDeleteButton = (id) => {
        const person = persons.find(person => person.id === id)
        
        if (window.confirm(`Delete ${person.name}?`)) {
            personService
            .deletePerson(id)
            .then(response => {
                setPersons(persons.filter(person => person.id !== id))                
            })
            .catch(error => {
                const errorMessage = {
                    message: `${person.name} has already been removed from server`,
                    type: 'error'
                }
                setStatus(errorMessage)
                setTimeout(() => {
                    setStatus({
                        ...status, 
                        message: null
                    })
                }, 5000)
                setPersons(persons.filter(person => person.id !== id))                
            })
        }
    }

    const handleFormSubmission = (e) => {
        e.preventDefault() 
        const personObject = {
            name: value.name,
            number: value.number
        }
        if(persons.some(person => person.name.toLowerCase() === value.name.toLowerCase())) {
            const id = persons.find(p => p.name === value.name).id
            if (window.confirm(`${value.name} is already added to phonebook, replace the old number with a new one?`)) {
                personService
                    .update(id, personObject)
                    .then(newPerson => {
                        const newPersons = persons.map(person => person.id !== id ? person : newPerson)
                        const notificationMessage = {
                            message: `${value.name} has been updated`, 
                            type: 'confirm'
                        }
                        setStatus(notificationMessage)
                        setTimeout(() => {
                            setStatus({
                                ...status, 
                                message: null
                            })
                          }, 5000)
                        setPersons(newPersons)
                    })
                    .catch(error => {
                        const validPersons = persons.filter(person => person.id !== id)
                        const errorMessage = {
                            message: `${value.name} has already been removed from server`,
                            type: 'error'
                        }
                        setStatus(errorMessage)
                        setTimeout(() => {
                            setStatus({
                                ...status, 
                                message: null
                            })
                        }, 5000)
                        setPersons(validPersons)
                    })
            }            
        } else {
            personService
                .create(personObject)
                .then(returnedPerson => {
                    const notificationMessage = { 
                        message: `Added ${value.name}`,
                        type: 'confirm'
                    }
                    setStatus(notificationMessage)
                    setTimeout(() => {
                        setStatus({
                            ...status, 
                            message: null
                        })
                    }, 5000)
                    setPersons(persons.concat(returnedPerson))
                })
                .catch(error => {
                    const errorMessage = {
                        message: error.response.data.message,
                        type: 'error'
                    }
                    setStatus(errorMessage)
                    setTimeout(() => {
                        setStatus({
                            ...status, 
                            message: null
                        })
                    }, 5000)
                    console.log(error.response)
                })
        }
        setValue({
            name: '', 
            number: ''
        })
    }

    const personsFiltered = persons.filter(person => (person.name.toLowerCase()).includes(filterValue.toLowerCase().trim()))

    return (
        <div>
            <h2>Phonebook</h2>
            <Notification status={status} />
            <Filter 
                value={filterValue} 
                onChange={e => setFilterValue(e.target.value)} 
            />
            <h3>add a new</h3>
            <PersonForm 
                onSubmit={handleFormSubmission} 
                nameValue={value.name} 
                numValue={value.number} 
                onChange={handleChange} 
            />
            <h3>Numbers</h3>
            <Persons persons={personsFiltered} handleDeleteButton={handleDeleteButton} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
