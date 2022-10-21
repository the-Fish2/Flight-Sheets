import { useState } from 'react'
import Flight from './Components/Flight'

const App = (props) => {

  const [flights, setFlights] = useState(props.flights)
  const [newFlight, setNewFlight] = useState('0')
  const [showAll, setShowAll] = useState(true)

  const addFlight = (event) => {
    event.preventDefault()
    const flightObj = {
      date: new Date().toISOString(),
      id: flights.length + 1,
      mass: 35,
      altitude: newFlight
    }
    console.log(event.target)
    setFlights(flights.concat(flightObj))
    setNewFlight('')
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