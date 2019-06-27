import React from 'react'

// Components
import Header from '../Header'
import Content from '../Content'
import Total from '../Total'

const Course = ({ course }) => {
    const title = course.name 
    const parts = course.parts 
    const sum = parts
        .map(part => part.exercises)
        .reduce((sum, val) => sum + val)

    return (
        <div>
            <Header title={title} />
            <Content parts={parts} />
            <Total sum={sum} />
        </div>
    )
}

export default Course 