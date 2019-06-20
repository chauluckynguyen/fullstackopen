import React from 'react'

// Components
import Part from '../Part'

const Content = ({parts}) => {
    return (
        <div>
           {
               parts && parts.map((part, i) => <Part key={i} name={part.name} exercises={part.exercises}/>)
           }
        </div>
    )
}

export default Content 