import express from 'express'
import dotenv from 'dotenv'

dotenv.config()
const port = process.env.SERVER_PORT
const app = express()

// GET
app.get('/', (req, res) => {
    res.send('API is Alive!')
})

app.get('/helloWorld', (req, res) => {
    res.send('Hello World')
})

// POST
app.post('/', (req, res) => {
    res.send('Got a POST request')
})

app.post('/name/:input', (req, res) => {
    const input = req.params.input
    res.send(`Your name is: ${ input }`)
})

app.listen(port, () => {
    console.log(`Server running on port http://localhost:${ port }`)
})
