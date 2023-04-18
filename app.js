//configure express
const express = require('express');
const app = express();

const budgetAppController = require('./controllers/budgetAppController')

app.use('/budget', budgetAppController)

app.get('/', (req, res) => {
    res.send('Welcome to My Budget App')
})

app.get('*', (req, res) => {
    res.status(404).json({error: 'page not found'})
})

module.exports = app

