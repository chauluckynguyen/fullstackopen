import React, {Fragment} from 'react'

const Total = ({parts}) => {

    const exercisesArray = parts.map(part => part.exercises)

    return (
        <Fragment>
            { 
                parts && <p>Number of exercises {exercisesArray.reduce((a, b) => a + b)}</p>
            }
        </Fragment>
    )
}

export default Total 