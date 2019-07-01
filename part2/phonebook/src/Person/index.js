import React from 'react'

const Person = ({name, number, handleDeleteButton}) => {
    return (
        <div>
            {name} {number} <button onClick={handleDeleteButton}>delete</button>
        </div>
    )
}

export default Person