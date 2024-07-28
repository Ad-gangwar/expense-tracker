import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Homepage from './pages/Homepage';
import LoginPage from './pages/Login';
import SignupPage from './pages/Register';

export default function App() {

  return (
    <div className='h-100 w-100'>
      <Toaster/>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Homepage />}></Route>
            <Route path='/login' element={<LoginPage />}></Route>
            <Route path='/signup' element={<SignupPage />}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}
