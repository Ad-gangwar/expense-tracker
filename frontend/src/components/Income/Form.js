import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from '../../context/globalContext';

function Form() {
    const { addIncome, error, setError } = useGlobalContext();
    const [inputState, setInputState] = useState({
        title: '',
        amount: '',
        date: '',
        category: '',
        description: '',
    });

    const { title, amount, date, category, description } = inputState;

    const handleInput = (name) => (e) => {
        setInputState({ ...inputState, [name]: e.target.value });
        setError('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addIncome(inputState);
        setInputState({
            title: '',
            amount: '',
            date: '',
            category: '',
            description: '',
        });
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            {error && <p className="text-red-500">{error}</p>}
            <div className="input-control">
                <input
                    type="text"
                    value={title}
                    name="title"
                    placeholder="Salary Title"
                    onChange={handleInput('title')}
                    className="w-full py-2 px-4 border-2 border-white bg-transparent rounded-md shadow-md  placeholder-gray-400 outline-none"
                />
            </div>
            <div className="input-control">
                <input
                    type="text"
                    value={amount}
                    name="amount"
                    placeholder="Salary Amount"
                    onChange={handleInput('amount')}
                    className="w-full py-2 px-4 border-2 border-white bg-transparent rounded-md shadow-md  placeholder-gray-400 outline-none"
                />
            </div>
            <div className="input-control">
                <DatePicker
                    id="date"
                    placeholderText="Enter A Date"
                    selected={date}
                    dateFormat="dd/MM/yyyy"
                    onChange={(date) => {
                        setInputState({ ...inputState, date: date });
                    }}
                    className="w-full py-2 px-4 border-2 border-white bg-transparent rounded-md shadow-md  placeholder-gray-400 outline-none"
                />
            </div>
            <div className="input-control">
                <select
                    required
                    value={category}
                    name="category"
                    id="category"
                    onChange={handleInput('category')}
                    className="w-full py-2 px-4 border-2 border-white bg-transparent rounded-md shadow-md bg-slate-800 placeholder-gray-400 outline-none"
                >
                    <option value="" disabled>Select Option</option>
                    <option value="salary">Salary</option>
                    <option value="freelancing">Freelancing</option>
                    <option value="investments">Investments</option>
                    <option value="stocks">Stocks</option>
                    <option value="bitcoin">Bitcoin</option>
                    <option value="bank">Bank Transfer</option>
                    <option value="youtube">Youtube</option>
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
                    className="w-full py-2 px-4 border-2 border-white bg-transparent rounded-md shadow-md  placeholder-gray-400 outline-none resize-none"
                ></textarea>
            </div>
            <div className="submit-btn">
            <button className="btn bg-yellow-500 text-[17px] hover:bg-yellow-600">Add Income</button>
            </div>
        </form>
    );
}

export default Form;
