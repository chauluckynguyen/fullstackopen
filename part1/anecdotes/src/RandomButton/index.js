import React from 'react'

const RandomButton = ({label, onClick}) => {
    return (
        <button onClick={onClick}>
            {label}
        </button>
    )
}

export default RandomButton 