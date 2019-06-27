import React from 'react'
import shortid from 'shortid'

// Components
import Part from '../Part'

const Content = ({parts}) => {
    return (
        <div>
            { parts && parts.map(part => <Part key={shortid.generate()} name={part.name} exercises={part.exercises} />) }
        </div>
    )
}

export default Content 