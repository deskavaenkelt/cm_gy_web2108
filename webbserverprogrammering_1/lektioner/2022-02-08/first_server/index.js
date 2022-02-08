// import express from 'express'
const express = require('express')

const port = 3001
const app = express()

app.get('/', (req, res) => {
    res.send('Välkommen till mitt API!')
})

app.listen(3001, () => {
    // console.log('Server running on port 3001')
    console.log('Server running on port http://localhost:3001')
})
