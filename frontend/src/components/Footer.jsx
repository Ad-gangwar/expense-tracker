import React from 'react'
import { Link } from 'react-router-dom';
// import logo from '../../assets/Images/logo.png'
import {  RiLinkedinFill } from 'react-icons/ri'
import { AiFillYoutube, AiFillGithub, AiOutlineInstagram } from 'react-icons/ai'

const socialLinks = [
  {
    path: "gj",
    icon: <AiFillYoutube className='group-hover:text-white w-4 h-5' />
  },
  {
    path: "gj",
    icon: <AiFillGithub className='group-hover:text-white w-4 h-5' />
  },
  {
    path: "gj",
    icon: <AiOutlineInstagram className='group-hover:text-white w-4 h-5' />
  },
  {
    path: "gj",
    icon: < RiLinkedinFill className='group-hover:text-white w-4 h-5' />
  },
]

const quickLinks01= [
  {
    path: "/home",
    display: "Home"
  },
  {
    path: "/",
    display: "About Us"
  },
  {
    path: "/services",
    display: "Services"
  },
  {
    path: "/",
    display: "Blog"
  }
]

const quickLinks02= [
  {
    path: "/",
    display: "Take Classes"
  },
  {
    path: "/",
    display: "Know about us"
  },
  {
    path: "/",
    display: "Go to Dashboard"
  },
  {
    path: "/",
    display: "Get a opinion"
  }
]

const quickLinks03=[
  {
    path: "/",
    display:"Donate"
  },
  {
    path: "/contact",
    display: "Contact Us"
  }
]
export default function Footer() {
  const year=new Date().getFullYear();
  return (
    <footer className='pb-16 pt-10 bg-teal-800 text-white'>
      <div className='container lg:px-12'>
        <div className='flex justify-between flex-col md:flex-row flex-wrap gap-[30px]'>
          <div>
          <div className='flex items-center gap-2'>
            {/* <img src={logo} className=' max-w-12'></img> */}
            <h1 className=' text-3xl py-5 font-bold'>ExpenseEase</h1>
          </div>
            <p className='text-[18px] leading-7 font-[400]'>
              Copyright © {year} Developed by Aditya Gangwar all right reserved.
            </p>
            <div className='flex items-center gap-3 mt-4'>
              {socialLinks.map((link, index)=>(
                <Link to={link.path} key={index} className='w-9 h-9 border border-solid border-white rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className='text-[20px] leading-[30px] font-[700] mb-6'>I want to:</h2>
            <ul>
              {quickLinks02.map((item, index)=>(
                <li key={index} className='mb-4'>
                  <Link to={item.path} className='text-[18px] leading-7 font-[400]'>{item.display}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className='text-[20px] leading-[30px] font-[700] mb-6'>Support</h2>
            <ul>
              {quickLinks03.map((item, index)=>(
                <li key={index} className='mb-4'>
                  <Link to={item.path} className='text-[18px] leading-7 font-[400]'>{item.display}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className='text-[20px] leading-[30px] font-[700] mb-6'>Quick Links</h2>
            <ul>
              {quickLinks01.map((item, index)=>(
                <li key={index} className='mb-4'>
                  <Link to={item.path} className='text-[18px] leading-7 font-[400]'>{item.display}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
