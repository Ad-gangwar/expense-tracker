import React from 'react';
import Layout from '../Layout';

export default function AboutUs() {
    return (
        <Layout>
            <div>
                <section id="about" className="bg-teal-100 text-teal-900 py-16">
                    <div className="container mx-auto text-center">
                        <h2 className="text-4xl font-extrabold mb-4">About Us</h2>
                        <p className="text-lg mb-8">We are dedicated to revolutionizing the way you manage your finances. Our platform is designed to simplify expense tracking for both individuals and groups, helping you take control of your financial life with ease and efficiency.</p>
                    </div>
                </section>
                
                <section id="mission" className="bg-white text-teal-900 py-0">
                    <div className="container mx-auto flex flex-col lg:flex-row items-center">
                        <div className="lg:w-1/2 lg:pr-8">
                            <h3 className="text-3xl font-bold mb-8">Our Mission</h3>
                            <p className="text-lg mb-8">Our mission is to create a platform that redefines the way people manage their expenses. We strive to offer an intuitive, user-friendly experience that makes expense tracking simple and effective. By providing powerful tools and insightful analytics, we aim to empower our users to make informed financial decisions, optimize their spending, and achieve their financial goals.</p>
                            <p className="text-lg mb-8">We believe that managing finances should be a seamless and stress-free experience. Our team is dedicated to continuously enhancing our platform, incorporating user feedback, and leveraging the latest technology to ensure that our users have the best possible experience. Our goal is to be the leading solution for personal and group expense management, helping users gain clarity and control over their financial lives.</p>
                        </div>
                        <div className="lg:w-1/2 mt-8 lg:mt-0 p-5">
                            <img src="https://img.freepik.com/free-vector/mobile-expense-management-abstract-concept-vector-illustration-charges-control-system-satelite-devices-checking-mobile-network-enterprise-economy-manage-telephony-costs-abstract-metaphor_335657-2906.jpg?t=st=1722168080~exp=1722171680~hmac=97d33576096145fcd7439971594bf5c9ea02dc260b37cb517fbf143cbf29712f&w=740" alt="Mission Image" className="w-full rounded-lg" />
                        </div>
                    </div>
                </section>
                
                <section id="vision" className="bg-teal-50 text-teal-900 py-16">
                    <div className="container mx-auto text-center">
                        <h3 className="text-3xl font-bold mb-8">Our Vision</h3>
                        <p className="text-lg mb-8">We envision a future where managing expenses is not only easy but also enjoyable. Our vision is to create a financial management tool that adapts to the needs of its users, offering personalized insights and solutions. By continuously innovating and integrating new features, we aim to provide a platform that grows with our users and meets their evolving financial needs.</p>
                        <p className="text-lg mb-8">Our commitment is to make financial management accessible to everyone, regardless of their background or financial expertise. We are dedicated to fostering a community of informed and empowered users, helping them achieve financial stability and success. Join us on our journey to transform the world of expense tracking and make managing your finances simpler and more effective.</p>
                    </div>
                </section>
            </div>
        </Layout>
    );
}
