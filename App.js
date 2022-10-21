import { useState } from 'react'


const App = (props) => {

  const { flights } = props

  return (
    <div>
      <h1>Flights</h1>
      <ul>
        {flights.map(flight => 
          <li key={flight.id}>
            {flight.content}
          </li>
        )}
      </ul>
    </div>
  )
}

export default App
