import { useState } from 'react'


const App = () => {

  const now = 0 //new Date()

  const [flights, setFlights] = useState(
    {
      number: 0,
      date: now,
      temperature: 0,
      mass: 0
    }
  )
  const plusMass = () => {
    const newFlights = { 
      ...flights,
      mass: flights.mass + 1, 
    }
    setFlights(newFlights)
  }

  return (
    <div>
      <div>
        {flights.number}
        {flights.date.toString()}
        {flights.temperature}
        {flights.mass}
        <button onClick={plusMass}>mass</button>
      </div>
    </div>
  )
}

export default App