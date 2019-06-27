import React from 'react'

// Components
import Person from '../Person'

const Persons = ({persons}) => {
    return (
        <div>
            {
                persons && persons.map(person => <Person key={person.id} name={person.name} number={person.number} />)
            }
        </div>
    )
}

export default Persons