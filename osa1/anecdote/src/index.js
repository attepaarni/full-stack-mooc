import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array.apply(null, new Array(6)).map(Number.prototype.valueOf,0))
  const [mostVoted, setMostVoted] = useState(0)

  const handleNextClick = () => {
      let randomInt = Math.floor(Math.random() * anecdotes.length)
      console.log(randomInt)
      setSelected(randomInt)
  }

  const handleVote = () =>{
      const copy = [...points]
      copy[selected] += 1;
      setPoints(copy)
      setMostVoted(copy.indexOf(Math.max(...copy)))
  }

  return (
    <div>
        <h1>Anecdote of the day</h1>
        <p>{props.anecdotes[selected]}</p>
        <p>has {points[selected]} votes</p>
        <button onClick={handleNextClick}>next anecdote</button>
        <button onClick={handleVote}>vote</button>
        <h2>Anecdote with most votes</h2>
        <p>{props.anecdotes[mostVoted]}</p>
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