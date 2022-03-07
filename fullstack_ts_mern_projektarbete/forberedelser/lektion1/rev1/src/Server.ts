// const express = require('express');
import express from 'express'
const app = express()
const port = 3001

app.get('/', (req, res) => {
    res.send('API is Alive with TypeScript!')
})

app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`Server started at http://localhost:${ port }`)
})
