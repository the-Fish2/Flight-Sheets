import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
const flights = [
  {
    id: 1,
    date: '3',
    temperature: 25,
    mass: 35,
    altitude: 125,
  },
  {
    id: 2,
    date: '4',
    temperature: 40,
    mass: 35,
    altitude: 155,
  }
]

ReactDOM.createRoot(document.getElementById('root')).render(<App flights={flights}/>)
