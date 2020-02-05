import React, { useState, useEffect} from 'react'
import ReactDOM from 'react-dom'

const Statistics = ({name, stat}) => {

    return(
        <>
        <tr>
          <td>
          {name}
          </td>
          <td>
          {stat || 0}
          </td>
        </tr>
        </>
    )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  useEffect(()=>{
    setTotal(good + neutral + bad)
    setAverage(((good * 1) + (bad * -1))/total)
    setPositive((good/total) * 100)
  }, [good, neutral, bad, total])

  const handleGoodClick = () => setGood(good + 1)
  const handleNeutralClick = () => setNeutral(neutral + 1)
  const handleBadClick = () => setBad(bad + 1)


  return (
    <div>
      <h1>Give feedback</h1>
      <button onClick={handleGoodClick}>good</button>
      <button onClick={handleNeutralClick}>neutral</button>
      <button onClick={handleBadClick}>bad</button>
      <h2>Statistics</h2>
      <table>
      <Statistics name='good' stat={good} />
      <Statistics name='neutral' stat={neutral} />
      <Statistics name='bad' stat={bad} />
      <Statistics name='total' stat={total} />
      <Statistics name='average' stat={average} />
      <Statistics name='positive' stat={positive} />
      </table>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)