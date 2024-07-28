const Income= require("../models/IncomeSchema")
const express = require('express');
const router = express.Router();
const passport = require('passport');

router.post("/add-income", passport.authenticate("jwt", {session: false}), async (req, res) => {
    const {title, amount, category, description, date}  = req.body
    const user = req.user._id;

    const income = Income({
        title,
        user,
        amount,
        category,
        description,
        date
    })

    try {
        //validations
        if(!title || !category || !description || !date || !user){
            return res.status(400).json({message: 'All fields are required!'})
        }
        if(amount <= 0 || !amount === 'number'){
            return res.status(400).json({message: 'Amount must be a positive number!'})
        }
        await income.save()
        res.status(200).json({message: 'Income Added'})
    } catch (error) {
        res.status(500).json({message: 'Server Error'})
    }
    console.log(income)
});

router.get("/get-incomes", passport.authenticate("jwt", {session: false}), async (req, res) =>{
    const user= req.user._id;
    try {
        const incomes = await Income.find({user: user}).sort({createdAt: -1})
        res.status(200).json({data: incomes})
    } catch (error) {
        res.status(500).json({message: 'Server Error'})
    }
})

router.post("/delete-income/:id", passport.authenticate("jwt", {session: false}),  async (req, res) =>{
    const {id} = req.params;
    Income.findByIdAndDelete(id)
        .then((income) =>{
            res.status(200).json({message: 'Income Deleted'})
        })
        .catch((err) =>{
            res.status(500).json({message: 'Server Error'})
        })
})


module.exports = router;