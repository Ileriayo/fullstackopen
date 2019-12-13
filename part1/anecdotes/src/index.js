import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ title, onClick }) => <button onClick={onClick}>{title}</button>

const Vote = ({ amount }) => <p>has {amount} vote(s)</p>

const Result = ({ max }) => {
  return (
    <div>
      <h1>Anecdote with the most votes</h1>
      <p>{max === 0 ? '**voting has not commenced**' : max}</p>
    </div>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  const [maxVote, setMaxVote] = useState(0)

  const handleClickVote = () => {
    let newVotes = [...votes]
    newVotes[selected] += 1
    setVotes(newVotes)
    console.log(newVotes.indexOf(Math.max(...newVotes)))

    // the first max voted anecdote found after a sequential search in the array wins
    setMaxVote(anecdotes[newVotes.indexOf(Math.max(...newVotes))])
  }

  const handleClickNext = () => {
      setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {props.anecdotes[selected]}
      <div>
        <Vote amount={votes[selected]}/>
        <Button title='vote'  onClick={() => handleClickVote()} />
        <Button title='next ancdote' onClick={() => handleClickNext()} />
      </div> 
      <Result max={maxVote}/>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)