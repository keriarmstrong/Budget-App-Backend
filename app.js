//configure express
const express = require('express');
const app = express();
const cors = require('cors')


const budgetAppController = require('./controllers/budgetAppController')

app.use(express.json())
app.use(cors())

app.use('/budget', budgetAppController)

app.get('/', (req, res) => {
    res.send('Welcome to My Budget App')
})

app.get('*', (req, res) => {
    res.status(404).json({error: 'page not found'})
})

module.exports = app

