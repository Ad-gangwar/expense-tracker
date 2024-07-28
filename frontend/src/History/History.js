import React from 'react';
import { useGlobalContext } from '../context/globalContext';

function History() {
    const {transactionHistory} = useGlobalContext(); 
    const [...history] = transactionHistory();

    return (
        <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold">Recent History</h2>
            {history.length === 0 ? (
                <p>No transaction history available</p>
            ) : (
                history.map((item) => {
                    const { _id, title, amount = 0, type } = item; // Default amount to 0 if undefined
                    const textColor = type === 'expense' ? 'text-red-500' : 'text-green-500';
                    const amountText = type === 'expense' ? `-${amount}` : `+${amount}`;

                    return (
                        <div
                            key={_id}
                            className="border-2 border-[#FFFFFF] shadow-md p-4 rounded-lg flex justify-between items-center"
                        >
                            <p className={textColor}>{title || 'No Title'}</p>
                            <p className={textColor}>{amountText}</p>
                        </div>
                    );
                })
            )}
        </div>
    );
}

export default History;
