const express = require('express');
const budget = express.Router();

const budgetData = require('../models/budgetData')

//Get Index
budget.get('/',(req, res) =>{
    res.status(202).json(budgetData)
})


module.exports = budget