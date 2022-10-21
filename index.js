const express = require('express')
const { avogadroDependencies } = require('mathjs')
const app = express()

let pastFlights = [
    {
        id: 1,
        score: 372,
        date: "8/4/2022",
      },
      {
        id: 2,
        score: 8,
        date: "7/2/2022",
      },
      {
        id: 3,
        score: 1,
        date: "6/8/2022",
      }
]

//get: get a flight sheet of a certain time
//post: add a new flight sheet
//get: get all previous flight sheets
//delete: delete an old flight sheet

app.get('/flights', (request, response) => {
    response.send('<h2> Flight Sheets </h2>')
})


app.get('/flights/:id', (request, response) => {
    const id = Number(request.params.id)
    const sheet = pastFlights.find(sheet => sheet.id === id)
    if (sheet) {
        response.json(sheet)
    }
    else {
        response.status(404).end()
    }
})

app.delete('/flights/:id', (request, response) => {
    const id = Number(request.params.id)
    pastFlights = pastFlights.filter(sheet => sheet.id !== id)
    response.status(204).end()
})

function generateId() {
    const currId = notes.length > 0
        ? Math.max(...pastFlights.map(flight => flight.id)) + 1
        : 1
    return currId
}

app.post('/flights', (request, response) => {

    const body = request.body
    
    if (!body.content) {
        return response.status(400).json({
            error: 'content missing'
        })
    }

    const newFlight = {
        score: body.score || -1,
        date: new Date(),
        //test split function or something
        id: generateId()
    }

    pastFlights = pastFlights.concat(newFlight)
    response.json(newFlight)
})

const PORT = 5500
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})