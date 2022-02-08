// import express from 'express'
const express = require('express')

const port = 3001
const app = express()

// CRUD   = Create Read Update Delete
// Method = POST   GET  PUT    DELETE

// Read
app.get('/', (req, res) => {
    console.log('GET Method')
    res.send(`Välkommen till mitt API på port: ${port}!`)
})

// Create
app.post('/', (req, res) => {
    console.log('POST Method')
    res.send(`Got a POST request!`)
})

// Update
app.put('/', (req, res) => {
    console.log('PUT Method')
    res.send(`Got a PUT/Update request!`)
})

// Delete
app.delete('/', (req, res) => {
    console.log('DELETE Method')
    res.send(`Got a DELETE request!`)
})

app.listen(port, () => {
    // console.log('Server running on port 3001')
    console.log(`Server running on port http://localhost:${port}`)
})
