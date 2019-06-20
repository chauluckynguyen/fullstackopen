import React from 'react'

// Components
import Statistic from '../Statistic'

const Statistics = ({good, neutral, bad}) => {
    const all = good + neutral + bad

    if (all === 0) {
        return (
            <div>
                No feedback given
            </div>
        )
    } else {
        return (
            <table> 
                <tbody>                   
                    <Statistic text="good" value={good} />
                    <Statistic text="neutral" value={neutral} />
                    <Statistic text="bad" value={bad} />
                    <Statistic text="all" value={all} />
                    <Statistic text="average" value={all/3} />
                    <Statistic text="positive" value={all === 0 ? 0 : `${good/all * 100} %`} />
                </tbody>
            </table>
        )
    }
}

export default Statistics