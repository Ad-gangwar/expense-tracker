const mongoose = require('mongoose');
const Expense = require('./ExpenseSchema');

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  phone: { type: Number },
  expenses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Expense'
    }
  ]
});

module.exports = mongoose.model('User', UserSchema);
