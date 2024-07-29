import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from '../../context/globalContext';
import { makeUnauthGetReq } from '../../utils/serverHelper';

function ExpenseForm() {
    const { addExpense, error, setError } = useGlobalContext();
    const [type, setType] = useState("personal");
    const [inputState, setInputState] = useState({
        title: '',
        amount: '',
        date: '',
        category: '',
        description: '',
        partners: []
    });
    const [users, setUsers] = useState([]);
    const [selectedPartners, setSelectedPartners] = useState([]);

    useEffect(() => {
        // Fetch users from the backend
        const fetchUsers = async () => {
            try {
                const response = await makeUnauthGetReq('/auth/users');
                setUsers(response.data);
            } catch (err) {
                console.error("Failed to fetch users", err);
            }
        };

        fetchUsers();
    }, []);

    const handleInput = name => e => {
        setInputState({ ...inputState, [name]: e.target.value });
        setError('');
    };

    const handleDateChange = date => {
        setInputState({ ...inputState, date });
        setError('');
    };

    const handleSubmit = e => {
        e.preventDefault();
        inputState.partners = selectedPartners;
        addExpense(inputState);
        setInputState({
            title: '',
            amount: '',
            date: '',
            category: '',
            description: '',
            partners: []
        });
        setType("personal");
        setSelectedPartners([]);
    };

    const handleAddPartner = () => {
        setSelectedPartners([...selectedPartners, { user: "", share: "" }]);
    };

    const handlePartnerChange = (index, field) => e => {
        const newPartners = [...selectedPartners];
        newPartners[index][field] = e.target.value;
        setSelectedPartners(newPartners);
    };

    const handlePartnerUserChange = (index, userId) => {
        const newPartners = [...selectedPartners];
        newPartners[index].user = userId;
        setSelectedPartners(newPartners);
    };

    const renderPartnerInputs = () => {
        return selectedPartners.map((partner, index) => (
            <div key={index} className="input-control flex gap-4 items-center">
                <select
                    value={partner.user}
                    onChange={e => handlePartnerUserChange(index, e.target.value)}
                    className="w-full px-4 py-2 border-2 border-white rounded-lg bg-transparent shadow-sm placeholder-gray-500 bg-gray-900"
                >
                    <option value="" disabled>Select User</option>
                    {users.map(user => (
                        <option key={user._id} value={user._id} className='bg-gray-800 hover:bg-gray-900'>
                            {user.name} ({user.email})
                        </option>
                    ))}
                </select>
                <input
                    type="number"
                    value={partner.share}
                    placeholder="Share"
                    onChange={handlePartnerChange(index, 'share')}
                    className="w-full px-4 py-2 border-2 border-white rounded-lg bg-transparent shadow-sm placeholder-gray-500"
                />
            </div>
        ));
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-8 mt-8">
            {error && <p className="text-red-500">{error}</p>}
            <div className="flex gap-4 mb-4 justify-between">
                <label className='text-lg'>
                    <input
                        type="radio"
                        value="personal"
                        checked={type === "personal"}
                        onChange={() => setType("personal")}
                        className="mr-2"
                    />
                    Personal Expense
                </label>
                <label className='text-lg'>
                    <input
                        type="radio"
                        value="group"
                        checked={type === "group"}
                        onChange={() => setType("group")}
                        className="mx-2"
                    />
                    Group Expense
                </label>
            </div>
            <div className='input-control'>
                <input
                    type="text"
                    value={inputState.title}
                    name="title"
                    placeholder="Expense Title"
                    onChange={handleInput('title')}
                    className="w-full px-4 py-2 border-2 border-white rounded-lg bg-transparent shadow-sm placeholder-gray-500"
                />
            </div>
            <div className="input-control">
                <input
                    value={inputState.amount}
                    type="text"
                    name="amount"
                    placeholder="Expense Amount"
                    onChange={handleInput('amount')}
                    className="w-full px-4 py-2 border-2 border-white rounded-lg bg-transparent shadow-sm placeholder-gray-500"
                />
            </div>
            <div className="input-control">
                <DatePicker
                    id="date"
                    placeholderText="Enter A Date"
                    selected={inputState.date}
                    dateFormat="dd/MM/yyyy"
                    onChange={handleDateChange}
                    className="w-full px-4 py-2 border-2 border-white rounded-lg bg-transparent shadow-sm placeholder-gray-500"
                />
            </div>
            <div className="selects input-control">
                <select
                    required
                    value={inputState.category}
                    name="category"
                    id="category"
                    onChange={handleInput('category')}
                    className="w-full px-4 py-2 border-2 border-white rounded-lg bg-transparent shadow-sm  bg-slate-800 placeholder-gray-500"
                >
                    <option value="" disabled className='bg-gray-800'>Select Option</option>
                    <option value="education" className='bg-gray-800'>Education</option>
                    <option value="groceries" className='bg-gray-800'>Groceries</option>
                    <option value="health" className='bg-gray-800'>Health</option>
                    <option value="subscriptions" className='bg-gray-800'>Subscriptions</option>
                    <option value="takeaways" className='bg-gray-800'>Takeaways</option>
                    <option value="clothing" className='bg-gray-800'>Clothing</option>
                    <option value="travelling" className='bg-gray-800'>Travelling</option>
                    <option value="other" className='bg-gray-800'>Other</option>
                </select>
            </div>
            <div className="input-control">
                <textarea
                    name="description"
                    value={inputState.description}
                    placeholder="Add A Reference"
                    id="description"
                    cols="30"
                    rows="4"
                    onChange={handleInput('description')}
                    className="w-full px-4 py-2 border-2 border-white rounded-lg bg-transparent shadow-sm placeholder-gray-500 resize-none"
                ></textarea>
            </div>
            {type === "group" && (
                <div>
                    {renderPartnerInputs()}
                    <button
                        type="button"
                        onClick={handleAddPartner}
                        className=" bg-yellow-500 rounded-lg py-2 px-3 hover:bg-yellow-600 mt-5"
                    >
                        Add Another Partner
                    </button>
                </div>
            )}
            <button className='btn bg-yellow-500 text-[18px] hover:bg-yellow-600'>Add Expense</button>
        </form>
    );
}

export default ExpenseForm;
