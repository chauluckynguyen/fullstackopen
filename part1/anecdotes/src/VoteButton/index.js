import React from 'react'

const VoteButton = ({label, onClick}) => {
    return (
        <button onClick={onClick}>
            {label}
        </button>
    )
}

export default VoteButton 