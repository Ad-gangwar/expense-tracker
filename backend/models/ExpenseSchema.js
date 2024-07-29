const mongoose = require('mongoose');
const User = require('./UserSchema');

const ExpenseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    partners: [{
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        share: {
            type: String,
        }
    }],
    amount: {
        type: Number,
        required: true,
        trim: true
    },
    type: {
        type: String,
        default: "expense"
    },
    date: {
        type: Date,
        required: true,
        trim: true
    },
    category: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        maxLength: 200, // Increased maxLength for description
        trim: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Expense', ExpenseSchema);
