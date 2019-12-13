import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ title, handleClick }) => <button onClick={handleClick}>{title}</button>

const Statistic = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  const { all, good, neutral, bad } = props
  if (all === 0) {
    return <>No feedback given</>
  }
  return (
    <table>
      <tbody>
        <Statistic text="good" value ={good} />
        <Statistic text="neutral" value ={neutral} />
        <Statistic text="bad" value ={bad} />
        <Statistic text="average" value ={((good * 1) + (neutral * 0) + (bad * -1)) / all } />
        <Statistic text="positive" value ={`${(good * 100) / all} %`} />
      </tbody>
    </table>
  )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const addGoodValue = () => {
    setGood(good + 1)
    setAll(all + 1)
  }

  const addBadValue = () => {
    setBad(bad + 1)
    setAll(all + 1)
  }

  const addNeutralValue = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
  }

  return (
    <div>
        <h1>give feedback</h1>
        <div>
            <Button handleClick={() => addGoodValue()} title='good' />
            <Button handleClick={() => addNeutralValue()} title='neutral' />
            <Button handleClick={() => addBadValue()} title='bad' />
        </div>
        
        <h1>statistics</h1>
        <Statistics all={all} good={good} neutral={neutral} bad={bad}/>
        
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)