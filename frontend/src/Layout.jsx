import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function Layout({children}) {
  return (
    <div className='h-full w-full'>
      <Navbar />
       {children}
      <Footer />
    </div>
  )
}
