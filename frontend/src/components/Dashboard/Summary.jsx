import React, { useEffect } from 'react';
import { useGlobalContext } from '../../context/globalContext';
import History from '../../History/History';
import { dollar } from '../../utils/Icons';
import Chart from '../Chart/Chart';

function Dashboard() {
    const { totalExpenses = () => 0, incomes = [], expenses = [], totalIncome = () => 0, totalBalance = () => 0, getIncomes, getExpenses } = useGlobalContext();

    useEffect(() => {
        getIncomes();
        getExpenses();
    }, []);

    // Calculate min and max with default values to avoid errors
    const minIncome = incomes.length > 0 ? Math.min(...incomes.map(item => item.amount || 0)) : 0;
    const maxIncome = incomes.length > 0 ? Math.max(...incomes.map(item => item.amount || 0)) : 0;
    const minExpense = expenses.length > 0 ? Math.min(...expenses.map(item => item.amount || 0)) : 0;
    const maxExpense = expenses.length > 0 ? Math.max(...expenses.map(item => item.amount || 0)) : 0;

    return (
        <div className="p-8">
            <h1 className="text-4xl font-bold mb-8">All Transactions</h1>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                <div className="col-span-1 md:col-span-3">
                    <div className=" p-6 rounded-xl shadow-md">
                        <Chart />
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8">
                            <div className="col-span-2  border-2 border-white shadow-md rounded-xl p-6">
                                <h2 className="text-xl font-semibold mb-4">Total Income</h2>
                                <p className="text-4xl font-bold">{dollar} {totalIncome()}</p>
                            </div>
                            <div className="col-span-2  border-2 border-white shadow-md rounded-xl p-6">
                                <h2 className="text-xl font-semibold mb-4">Total Expense</h2>
                                <p className="text-4xl font-bold">{dollar} {totalExpenses()}</p>
                            </div>
                            <div className="col-span-2  border-2 border-white shadow-md rounded-xl p-6 flex flex-col items-center">
                                <h2 className="text-xl font-semibold mb-4">Total Balance</h2>
                                <p className="text-5xl font-bold text-green-600 opacity-60">{dollar} {totalBalance()}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 md:col-span-2">
                    <div className=" p-6 rounded-xl shadow-md">
                        <History />
                        <h2 className="text-xl font-semibold mt-8 mb-4">Min <span className="text-2xl">Salary</span> Max</h2>
                        <div className=" border-2 border-white shadow-md rounded-xl p-6 flex justify-between items-center mb-8">
                            <p className="text-lg font-semibold">${minIncome}</p>
                            <p className="text-lg font-semibold">${maxIncome}</p>
                        </div>
                        <h2 className="text-xl font-semibold mb-4">Min <span className="text-2xl">Expense</span> Max</h2>
                        <div className=" border-2 border-white shadow-md rounded-xl p-6 flex justify-between items-center">
                            <p className="text-lg font-semibold">${minExpense}</p>
                            <p className="text-lg font-semibold">${maxExpense}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
