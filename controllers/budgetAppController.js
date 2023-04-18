const express = require('express');
const budget = express.Router();

const budgetData = require('../models/budgetData')

//Get Index
budget.get('/',(req, res) =>{
    res.status(202).json(budgetData)
})
//Get Show
budget.get('/:id', (req, res) => {
    const {id} = req.params
    const transaction = budgetData[id]
    { transaction ? res.status(202).json(budgetData[id]) : res.redirect('*')}
})


module.exports = budget