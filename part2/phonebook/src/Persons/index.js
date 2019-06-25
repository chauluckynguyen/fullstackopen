import React from 'react'

// Components
import Person from '../Person'

const Persons = ({persons}) => {
    return (
        <div>
            {
                persons && persons.map(person => <Person name={person.name} number={person.number} />)
            }
        </div>
    )
}

export default Persons