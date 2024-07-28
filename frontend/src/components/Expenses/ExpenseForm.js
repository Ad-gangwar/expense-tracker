import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from '../../context/globalContext';
import { plus } from '../../utils/Icons';

function ExpenseForm() {
    const { addExpense, error, setError } = useGlobalContext();
    const [inputState, setInputState] = useState({
        title: '',
        amount: '',
        date: '',
        category: '',
        description: '',
    });

    const { title, amount, date, category, description } = inputState;

    const handleInput = name => e => {
        setInputState({ ...inputState, [name]: e.target.value });
        setError('');
    };

    const handleSubmit = e => {
        e.preventDefault();
        addExpense(inputState);
        setInputState({
            title: '',
            amount: '',
            date: '',
            category: '',
            description: '',
        });
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-8 mt-8">
            {error && <p className="text-red-500">{error}</p>}
            <div className="input-control">
                <input
                    type="text"
                    value={title}
                    name="title"
                    placeholder="Expense Title"
                    onChange={handleInput('title')}
                    className="w-full px-4 py-2 border-2 border-white rounded-lg bg-transparent shadow-sm  placeholder-gray-500"
                />
            </div>
            <div className="input-control">
                <input
                    value={amount}
                    type="text"
                    name="amount"
                    placeholder="Expense Amount"
                    onChange={handleInput('amount')}
                    className="w-full px-4 py-2 border-2 border-white rounded-lg bg-transparent shadow-sm  placeholder-gray-500"
                />
            </div>
            <div className="input-control">
                <DatePicker
                    id="date"
                    placeholderText="Enter A Date"
                    selected={date}
                    dateFormat="dd/MM/yyyy"
                    onChange={date => setInputState({ ...inputState, date })}
                    className="w-full px-4 py-2 border-2 border-white rounded-lg bg-transparent shadow-sm  placeholder-gray-500"
                />
            </div>
            <div className="selects input-control">
                <select
                    required
                    value={category}
                    name="category"
                    id="category"
                    onChange={handleInput('category')}
                    className="w-full px-4 py-2 border-2 border-white rounded-lg bg-transparent shadow-sm text-white bg-slate-800 placeholder-gray-500"
                >
                    <option value="" disabled>Select Option</option>
                    <option value="education">Education</option>
                    <option value="groceries">Groceries</option>
                    <option value="health">Health</option>
                    <option value="subscriptions">Subscriptions</option>
                    <option value="takeaways">Takeaways</option>
                    <option value="clothing">Clothing</option>
                    <option value="travelling">Travelling</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <div className="input-control">
                <textarea
                    name="description"
                    value={description}
                    placeholder="Add A Reference"
                    id="description"
                    cols="30"
                    rows="4"
                    onChange={handleInput('description')}
                    className="w-full px-4 py-2 border-2 border-white rounded-lg bg-transparent shadow-sm  placeholder-gray-500 resize-none"
                ></textarea>
            </div>
            <button className='btn bg-yellow-500 text-[18px] hover:bg-yellow-600'>Add expense</button>
        </form>
    );
}

export default ExpenseForm;
