import React, { useState } from "react";
import { Link } from "react-router-dom";
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import { makeUnauthPostReq } from '../utils/serverHelper';
import HashLoader from 'react-spinners/HashLoader';
import Carousel from "../components/Carousel";

const SignupPage = () => {
  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const slides = [
    'https://github.com/Ad-gangwar/Web-Relay/blob/main/Screenshot_2024-07-27_151555-removebg-preview.png?raw=true',
    'https://github.com/Ad-gangwar/Web-Relay/blob/main/Screenshot_2024-07-27_151618-removebg-preview.png?raw=true'
  ]

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { email, password, name };
    try {
      const response = await makeUnauthPostReq('/auth/register', data);
      if (response.success) {
        toast.success("Congratulations! You are successfully registered.");
        navigate("/login");
      } else {
        toast.error(response.err || "Registration failed. Please try again.");
      }
    } catch (error) {
      toast.error("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="flex w-[800px] h-[600px] bg-white rounded-xl rounded-bl-[65px] overflow-hidden">
        <div className="w-2/5 bg-gradient-to-b from-teal-500 to-teal-700 flex items-center justify-center m-3 rounded-xl rounded-bl-[65px] rounded-tr-[65px]">
          <Carousel autoSlide={true} >
            {[...slides.map((s) => (
              <img src={s} />
            ))]}
          </Carousel>
        </div>

        <div className="w-3/5 p-6 px-8 mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            We are <span className="text-teal-600">ExpenseEase</span>
          </h2>
          <p className="text-gray-600 mb-6">
            <span className="text-2xl">👋</span> Sign Up to get started.
          </p>
          <form>
            <div className="mb-8">
              <label className="block text-gray-600 mb-1" htmlFor="name">
                Full Name
              </label>
              <input
                className="w-full p-3 rounded-lg bg-gray-200 text-gray-900"
                type="text"
                placeholder="Enter your full name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-8">
              <label className="block text-gray-600 mb-1" htmlFor="email">
                Email
              </label>
              <input
                className="w-full p-3 rounded-lg bg-gray-200 text-gray-900"
                type="email"
                placeholder="Enter your Email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-12">
              <label className="block text-gray-600 mb-1" htmlFor="password">
                Password
              </label>
              <input
                className="w-full p-3 rounded-lg bg-gray-200 text-gray-900"
                type="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              className="w-full p-3 rounded-full bg-teal-600 text-white hover:bg-teal-700"
              type="submit" onClick={handleSubmit}
            >
              {loading ? <HashLoader size={35} color='white' /> : 'Register'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
