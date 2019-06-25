import React from 'react'

const PersonForm = ({onSubmit, nameValue, numValue, onChange}) => {
    return (
        <form onSubmit={onSubmit}>
            <div>
                name: <input value={nameValue} name="name" onChange={onChange} /><br/>
                number: <input value={numValue} name="number" onChange={onChange} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonForm