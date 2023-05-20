const express = require('express');
const budget = express.Router();

const budgetData = require('../models/budgetData')

//Read all | Index
budget.get('/',(req, res) =>{
    res.status(202).json(budgetData)
})
//Read single | Show 
budget.get('/:id', (req, res) => {
    const {id} = req.params
    const transaction = budgetData[id]
    { transaction ? res.status(202).json(budgetData[id]) : res.redirect('*')}
})

//Create | Post
budget.post('/',(req, res) => {
    const newTransaction = req.body;
    budgetData.push(newTransaction)
    res.status(202).json(budgetData)
})

//Delete
budget.delete('/:id', (req, res) => {
    const {id} = req.params;
    const removedTransaction = budgetData.splice(id, 1)
    {budgetData[id] ? res.status(202).json(removedTransaction):
    res.status(404).json({error: `Transaction with ID: ${id} Not found.`})
    }   
})

//Put | Update
budget.put('/:id', (req, res) => {
    const {id} = req.params;
    const editTransaction = req.body;
    if(budgetData[id])  {
        budgetData[id] = editTransaction 
        res.status(202).json(budgetData)
    }else {
        res.sendStatus(404).json({error: `No Transaction matches the ID: ${id}`})
    }
    
    })

module.exports = budget