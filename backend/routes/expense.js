const Expense = require("../models/ExpenseSchema")
const express = require('express');
const router = express.Router();
const passport = require('passport');


 router.post("/add-expense", passport.authenticate("jwt", {session: false}), async (req, res) => {
    const user = req.user._id;
    const {title, amount, category, description, date, partners}  = req.body;
    const expense = Expense({
        title,
        user,
        amount,
        category,
        description,
        date,
        partners
    })

    try {
        //validations
        if(!title || !category || !description || !date || !user){
            return res.status(400).json({message: 'All fields are required!'})
        }
        if(amount <= 0 || !amount === 'number'){
            return res.status(400).json({message: 'Amount must be a positive number!'})
        }
        await expense.save()
        res.status(200).json({message: 'Expense Added'})
    } catch (error) {
        res.status(500).json({message: 'Server Error'})
    }

    console.log(expense)
});

router.get("/get-expenses", passport.authenticate("jwt", { session: false }), async (req, res) => {
    const user = req.user._id;
    try {
        const expenses = await Expense.find({ user: user })
            .sort({ createdAt: -1 })
            .populate({
                path: 'partners.user', 
                select: 'name email'
            });

        res.status(200).json({ data: expenses });
    } catch (error) {
        console.error("Error fetching expenses:", error);
        res.status(500).json({ message: 'Server Error' });
    }
});


router.post("/delete-expense/:id", passport.authenticate("jwt", {session: false}),  async (req, res) =>{
    const {id} = req.params;
    console.log(id);
    Expense.findByIdAndDelete(id)
        .then((expense) =>{
            res.status(200).json({message: 'Expense Deleted'})
        })
        .catch((err) =>{
            res.status(500).json({message: 'Server Error'})
    })
});

module.exports = router;
