import { useState, useEffect } from 'react'
import axios from 'axios'
import Flight from './Components/Flight'
import flightService from './services/flights'

const App = () => {

  const [flights, setFlights] = useState([])
  const [newFlight, setNewFlight] = useState('0')
  const [showAll, setShowAll] = useState(true)

  const hook = () => {
    console.log('effect')
    flightService.getAll()
    .then(initialFlights => {
      setFlights(initialFlights)
    })
  }
  useEffect(hook, [])
  
  console.log('rendered', flights.length, 'flights')

  const addFlight = (event) => {
    event.preventDefault()
    const flightObj = {
      date: new Date().toISOString(),
      id: flights.length + 1,
      mass: 35,
      altitude: newFlight
    }

    flightService.create(flightObj)
    .then(returnedFlight => {
      setFlights(flights.concat(returnedFlight))
      setNewFlight('')
    })

  }

  const flightsToShow = showAll ? flights : flights.filter(flight => flight.altitude > 110 && flight.altitude < 135)

  const handleChange = (event) => {
    setNewFlight(event.target.value)
  }

  return (
    <div>
      <h1>Flights</h1>

      <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'Close Altitudes' : 'All' }
      </button>

      <ul>
        {flightsToShow.map(flight => 
          <Flight key={flight.id}
            flight = {flight}
          />
        )}
      </ul>

      <form onSubmit={addFlight}>
        <input 
          value={newFlight}
          onChange={handleChange}
        />
        <button type="submit"> upload new </button>
      </form>

    </div>
  )
}

export default App