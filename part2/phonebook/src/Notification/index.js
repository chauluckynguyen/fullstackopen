import React from 'react'
import baseStyle from './index.css'

const Notification = ({ status }) => {
    const { message, type } = status 

    if (message === null) {
        return null
    }

    let notificationStyle = null

    if (type === 'error') {
        notificationStyle = {
            ...baseStyle, 
            borderColor: 'red', 
            color: 'red'
        }
    } else {
        notificationStyle = {
            ...baseStyle, 
            borderColor: 'green', 
            color: 'green'
        }
    }

    return (
        <div className="Notification" style={notificationStyle}>
            {message}
        </div>
    )
}

export default Notification