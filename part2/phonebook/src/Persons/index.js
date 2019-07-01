import React from 'react'

// Components
import Person from '../Person'

const Persons = ({persons, handleDeleteButton}) => {
    return (
        <div>
            {
                persons && persons.map(person => <Person key={person.id} name={person.name} number={person.number} handleDeleteButton={() => handleDeleteButton(person.id)} />)
            }
        </div>
    )
}

export default Persons