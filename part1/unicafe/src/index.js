import React, { useState } from 'react'
import ReactDOM from 'react-dom'

// Components
import Button from './Button'
import Statistics from './Statistics'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0) 

  const handleGood = () => setGood(good + 1)

  const handleNeutral = () => setNeutral(neutral + 1)

  const handleBad = () => setBad(bad + 1)

  return (
    <div>
        <h1>give feedback</h1>
        <Button onClick={handleGood} label="good" />
        <Button onClick={handleNeutral} label="neutral" />
        <Button onClick={handleBad} label="bad" />
        <h1>statistics</h1>
        <Statistics good={good} neutral={neutral} bad={bad} />                     
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)