// const express = require('express');
import express from 'express'
import dotenv from 'dotenv'

dotenv.config()
// const port = 3001
const port = process.env.SERVER_PORT
const app = express()

app.get('/', (request, response) => {
    response.send('API Alive!')
})

app.listen(port, () =>{
    console.log(`Server listening on port: http://localhost:${port}`)
})
