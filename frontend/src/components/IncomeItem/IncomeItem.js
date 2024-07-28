import React from 'react';
import { dateFormat } from '../../utils/dateFormat';
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { SiFreelancer } from "react-icons/si";
import { AiOutlineStock } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import { FaBitcoin } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPiggyBank } from "react-icons/fa";
import { FaBookReader } from "react-icons/fa";
import { IoFastFood } from "react-icons/io5";
import { FaBriefcaseMedical } from "react-icons/fa";
import { RiTakeawayFill } from "react-icons/ri";
import { GiClothes } from "react-icons/gi";
import { FaQuestionCircle } from "react-icons/fa";
import { AiFillDollarCircle } from "react-icons/ai";
import { FaCalendarAlt } from "react-icons/fa";
import { FaComment } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { PiTelevisionFill } from "react-icons/pi";

function IncomeItem({
    id,
    title,
    amount,
    date,
    category,
    description,
    deleteItem,
    type
}) {

    const categoryIcon = () => {
        switch(category) {
            case 'salary':
                return <FaMoneyBillTrendUp className='w-10 h-10 text-slate-800'/>;
            case 'freelancing':
                return <SiFreelancer className='w-10 h-10 text-slate-800'/>;
            case 'investments':
                return <AiOutlineStock className='w-10 h-10 text-slate-800'/>;
            case 'stocks':
                return <FaUsers className='w-10 h-10 text-slate-800'/>;
            case 'bitcoin':
                return <FaBitcoin className='w-10 h-10 text-slate-800'/>;
            case 'bank':
                return <FaAddressCard className='w-10 h-10 text-slate-800'/>;
            case 'youtube':
                return <FaYoutube className='w-10 h-10 text-slate-800'/>;
            case 'other':
                return <FaPiggyBank className='w-10 h-10 text-slate-800'/>;
            default:
                return '';
        }
    }

    const expenseCatIcon = () => {
        switch (category) {
            case 'education':
                return <FaBookReader className='w-10 h-10 text-slate-800'/>;
            case 'groceries':
                return <IoFastFood className='w-10 h-10 text-slate-800'/>;
            case 'health':
                return <FaBriefcaseMedical className='w-10 h-10 text-slate-800'/>;
            case 'subscriptions':
                return <PiTelevisionFill className='w-10 h-10 text-slate-800'/>;
            case 'takeaways':
                return <RiTakeawayFill className='w-10 h-10 text-slate-800'/>;
            case 'clothing':
                return <GiClothes className='w-10 h-10 text-slate-800'/>;
            case 'travelling':
                return <SiFreelancer className='w-10 h-10 text-slate-800'/>;
            case 'other':
                return <FaQuestionCircle className='w-10 h-10 text-slate-800'/>;
            default:
                return '';
        }
    }

    return (
        <div className=" border border-gray-200 shadow-lg rounded-lg p-6 mb-4 flex items-start gap-6 w-full">
            <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center border">
                {type === 'expense' ? expenseCatIcon() : categoryIcon()}
            </div>
            <div className="flex-1 flex flex-col gap-2">
                <h5 className="text-xl font-semibold flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full bg-[#4CAF50]`}></span>
                    {title}
                </h5>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-sm">
                    <div className="flex items-center gap-4 mb-2 sm:mb-0">
                        <p className="flex items-center gap-2 ">
                            <AiFillDollarCircle className='w-5 h-5'/> {amount}
                        </p>
                        <p className="flex items-center gap-2 ">
                            <FaCalendarAlt className='w-5 h-5'/> {dateFormat(date)}
                        </p>
                        <p className="flex items-center gap-2">
                            <FaComment  className='w-5 h-5'/> {description}
                        </p>
                    </div>
                    <button 
                        onClick={() => deleteItem(id)} 
                    >
                        <FaTrash  className='w-5 h-5'/>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default IncomeItem;
