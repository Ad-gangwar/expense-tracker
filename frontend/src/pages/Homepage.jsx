import React, { useState, useEffect } from 'react';
import Layout from '../Layout';

const features = [
    {
        id: 1,
        title: 'Personal Expense Tracking',
        description: 'Monitor your personal spending with detailed reports and insights.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-teal-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 3h18v18H3V3zM21 1H3a2 2 0 00-2 2v18a2 2 0 002 2h18a2 2 0 002-2V3a2 2 0 00-2-2z"></path>
                <path d="M10 15l5-5-5-5"></path>
            </svg>
        ),
    },
    {
        id: 2,
        title: 'Group Expense Management',
        description: 'Keep track of group expenses and split bills seamlessly.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-teal-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 16v-4m0 0l-2-2m2 2l2-2"></path>
            </svg>
        ),
    },
    {
        id: 3,
        title: 'Real-Time Analytics',
        description: 'Get real-time updates and insights on your spending habits.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-teal-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 12l2-2 4 4 6-6 4 4 2-2"></path>
                <path d="M21 21H3V5h18v16z"></path>
            </svg>
        ),
    },
];

export default function Homepage() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // Check if the user is logged in
        const token = localStorage.getItem('expToken');
        if (token) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, []);

    return (
        <Layout>
            <div>
                <section id="home" className="bg-teal-100 text-teal-900 py-16 relative">
                    <div className="container mx-auto text-center">
                        <h2 className="text-5xl font-extrabold mb-4">Track Your Expenses Effortlessly</h2>
                        <p className="text-xl mb-8">Manage personal and group expenses with ease using our intuitive and stylish platform.</p>
                        {!isLoggedIn && (
                            <a href="#signup" className="bg-teal-600 text-white px-8 py-4 rounded-full text-lg hover:bg-teal-500 transition">Get Started</a>
                        )}
                    </div>
                </section>
                
                <section id="features" className="bg-white text-teal-900 py-16">
                    <div className="container mx-auto text-center">
                        <h3 className="text-4xl font-bold mb-8">Features</h3>
                        <div className="flex flex-wrap justify-center gap-8">
                            {features.map(({ id, title, description, icon }) => (
                                <div key={id} className="w-full md:w-1/3 p-4">
                                    <div className="bg-teal-50 p-6 rounded-lg shadow-lg flex flex-col items-center">
                                        {icon} {/* SVG icon */}
                                        <h4 className="text-xl font-semibold mb-4">{title}</h4>
                                        <p>{description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                
                <section id="signup" className={`text-white py-16 text-center ${isLoggedIn ? 'bg-teal-700' : 'bg-teal-600'}`}>
                    <div className="container mx-auto">
                        {isLoggedIn ? (
                            <>
                                <h3 className="text-4xl font-bold mb-4">Welcome Back!</h3>
                                <p className="text-lg mb-8">Explore new features and manage your expenses with ease.</p>
                                <a href="/dashboard" className="bg-white text-teal-600 px-8 py-4 rounded-full text-lg hover:bg-gray-200 transition">Go to Dashboard</a>
                            </>
                        ) : (
                            <>
                                <h3 className="text-4xl font-bold mb-4">Ready to Get Started?</h3>
                                <p className="text-lg mb-8">Join us today and take control of your expenses.</p>
                                <a href="#signup-form" className="bg-white text-teal-600 px-8 py-4 rounded-full text-lg hover:bg-gray-200 transition">Sign Up Now</a>
                            </>
                        )}
                    </div>
                </section>

                <section id="feedback" className="bg-teal-50 text-teal-900 py-16">
                    <div className="container mx-auto text-center">
                        <h3 className="text-4xl font-bold mb-8">What Our Users Say</h3>
                        <div className="flex flex-wrap justify-center gap-8">
                            <div className="w-full md:w-1/3 p-4">
                                <div className="bg-white p-6 rounded-lg shadow-lg">
                                    <p className="text-lg mb-4">“This app has made tracking my expenses so easy and enjoyable! Highly recommend.”</p>
                                    <p className="font-semibold">Alice Johnson</p>
                                    <p className="text-sm text-gray-500">Personal User</p>
                                </div>
                            </div>
                            <div className="w-full md:w-1/3 p-4">
                                <div className="bg-white p-6 rounded-lg shadow-lg">
                                    <p className="text-lg mb-4">“Managing group expenses has never been simpler. The real-time analytics are a game changer!”</p>
                                    <p className="font-semibold">Bob Smith</p>
                                    <p className="text-sm text-gray-500">Group Coordinator</p>
                                </div>
                            </div>
                            <div className="w-full md:w-1/3 p-4">
                                <div className="bg-white p-6 rounded-lg shadow-lg">
                                    <p className="text-lg mb-4">“An excellent tool for keeping track of my spending and understanding where my money goes.”</p>
                                    <p className="font-semibold">Charlie Brown</p>
                                    <p className="text-sm text-gray-500">Regular User</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
}
