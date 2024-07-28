import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
    const token = localStorage.getItem('expToken');
    const [redirectPath, setRedirectPath] = useState('/signup');

    useEffect(() => {
        if (token) {
            setRedirectPath('/dashboard');
        }
    }, [token])

    const navigate = useNavigate();

    return (
        <div>
            <header className="flex items-center justify-between px-6 py-5 bg-gradient-to-r from-teal-600 to-teal-700 text-white shadow-2xl">
                <Link to="/"><div className='flex items-center gap-2'>
                    <h1 className=' text-3xl font-bold'>ExpenseEase</h1>
                </div></Link>
                <nav className="space-x-6">
                    <a
                        href="#features"
                        className="hover:text-teal-200 font-md transition duration-300"
                    >
                        Features
                    </a>
                    <a
                        href="/about"
                        className="hover:text-teal-200 font-md "
                    >
                        About Us
                    </a>
                    <a
                        href="/contact"
                        className="hover:text-teal-200 font-md"
                    >
                        Contact
                    </a>
                    <button className="bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded-lg transition duration-300" onClick={() => navigate(redirectPath)}>
                        {token ? 'My Dashboard' : 'Get Started'}
                    </button>
                </nav>
            </header>
        </div>
    )
}
