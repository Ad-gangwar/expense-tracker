import React, { useContext, useState } from "react"
import { makeAuthGetReq, makeAuthPostReq } from "../utils/serverHelper";
import {toast} from 'react-hot-toast';

const GlobalContext = React.createContext()

export const GlobalProvider = ({ children }) => {

    const [incomes, setIncomes] = useState([])
    const [expenses, setExpenses] = useState([])
    const [error, setError] = useState(null)

    //calculate incomes
    const addIncome = async (income) => {
        const response = await makeAuthPostReq(`/income/add-income`, income)
            .catch((err) => {
                setError(err.response.data.message)
            })
            toast.success(response.message)
        getIncomes()
    }

    const getIncomes = async () => {
        const response = await makeAuthGetReq(`/income/get-incomes`)
        setIncomes(response.data)
        console.log(response.data)
    }

    const deleteIncome = async (id) => {
        const res = await makeAuthPostReq(`/income/delete-income/${id}`)
        toast.success(res.message)
        getIncomes()
    }

    const totalIncome = () => {
        let totalIncome = 0;
        incomes?.forEach((income) => {
            totalIncome = totalIncome + income.amount
        })

        return totalIncome;
    }


    //calculate incomes
    const addExpense = async (income) => {
        const response = await makeAuthPostReq(`/expense/add-expense`, income)
            .catch((err) => {
                setError(err.response.data.message)
            })
            toast.success(response.message)
        getExpenses()
    }

    const getExpenses = async () => {
        const response = await makeAuthGetReq(`/expense/get-expenses`)
        setExpenses(response.data)
        console.log(response.data)
    }

    const deleteExpense = async (id) => {
        console.log(id);
        const res = await makeAuthPostReq(`/expense/delete-expense/${id}`)
        toast.success(res.message)
        getExpenses()
    }

    const totalExpenses = () => {
        let totalIncome = 0;
        expenses?.forEach((income) => {
            totalIncome = totalIncome + income.amount
        })

        return totalIncome;
    }


    const totalBalance = () => {
        return totalIncome() - totalExpenses()
    }

    const transactionHistory = () => {
        const history = [...incomes, ...expenses];
        history.sort((a, b) => {
            return new Date(b.createdAt) - new Date(a.createdAt)
        });
        console.log(history);
        return history.slice(0, 3);
    }


    return (
        <GlobalContext.Provider value={{
            addIncome,
            getIncomes,
            incomes,
            deleteIncome,
            expenses,
            totalIncome,
            addExpense,
            getExpenses,
            deleteExpense,
            totalExpenses,
            totalBalance,
            transactionHistory,
            error,
            setError
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(GlobalContext)
}