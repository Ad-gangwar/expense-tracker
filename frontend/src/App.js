import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from './pages/Homepage';
import LoginPage from './pages/Login';
import SignupPage from './pages/Register';
import AboutUs from './pages/About';
import Contact from './pages/Contact';
import Dashboard from './components/Dashboard/Dashboard';
import Profile from './components/Dashboard/Profile';
import Expenses from './components/Expenses/Expenses';
import Summary from './components/Dashboard/Summary';
import Income from './components/Income/Income';
import History from './History/History';

export default function App() {
  const AppRouter = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/register-student",
      element: <SignupPage />,
    },
    {
      path: "/about",
      element: <AboutUs />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
      children: [
        {
          path: "profile",
          element: <Profile />,
        },
        {
          path: "summary",
          element: <Summary />,
        },
        {
          path: "expenses",
          element: <Expenses />,
        },
        {
          path: "income",
          element: <Income />,
        },
        {
          path: "history",
          element: <History />,
        },
      ],
    },
  
  ]);
  return (
    <div>
      <RouterProvider router={AppRouter} />
    </div>
  );
}
