import React, { useEffect } from 'react';
import { useGlobalContext } from '../../context/globalContext';
import ExpenseForm from './ExpenseForm';
import IncomeItem from '../IncomeItem/IncomeItem';

function Expenses() {
    const { getExpenses, expenses, deleteExpense, totalExpenses } = useGlobalContext();

    useEffect(() => {
        getExpenses();
    }, []);

    return (
        <div className="flex flex-col p-10 overflow-auto">
            <h1 className="text-3xl font-bold mb-4">Expenses</h1>
            <h2 className="border-2 border-white shadow-lg rounded-2xl p-4 text-2xl flex justify-center items-center gap-3 mb-4">
                Total Expense:
                <span className="text-3xl font-extrabold text-green-500">${totalExpenses()}</span>
            </h2>
            <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full lg:w-1/2">
                    <ExpenseForm />
                </div>
                <div className="w-full lg:w-1/2">
                    {expenses.map((expense) => {
                        const { _id, title, amount, date, category, description, type , partners} = expense;
                        return (
                            <IncomeItem
                                key={_id}
                                id={_id}
                                title={title}
                                description={description}
                                amount={amount}
                                partners = {partners}
                                date={date}
                                type={type}
                                category={category}
                                indicatorColor="text-green-500"
                                deleteItem={deleteExpense}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Expenses;
