import React, { useEffect } from 'react';
import { useGlobalContext } from '../../context/globalContext';
import Form from './Form';
import IncomeItem from '../IncomeItem/IncomeItem';

function Income() {
    const { addIncome, incomes, getIncomes, deleteIncome, totalIncome } = useGlobalContext();

    useEffect(() => {
        getIncomes();
    }, []);

    return (
        <div className="flex flex-col gap-4 p-6">
            <h1 className="text-4xl font-bold text-center">Incomes</h1>
            <div className="w-full border-2 border-[#FFFFFF] shadow-md p-4 rounded-2xl text-center text-2xl">
                Total Income : 
                <span className="text-4xl font-extrabold text-green-600">${totalIncome()}</span>
            </div>
            <div className="flex flex-col lg:flex-row gap-6">
                <div className="form-container flex-1">
                    <Form />
                </div>
                <div className="incomes flex-1 flex flex-col gap-4">
                    {incomes.map((income) => {
                        const { _id, title, amount, date, category, description, type } = income;
                        return (
                            <IncomeItem
                                key={_id}
                                id={_id}
                                title={title}
                                description={description}
                                amount={amount}
                                date={date}
                                type={type}
                                category={category}
                                indicatorColor="var(--color-green)"
                                deleteItem={deleteIncome}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Income;
