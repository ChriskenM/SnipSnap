// src/components/Layout.js
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import { useAuth } from '../contexts/AuthContext';

const Layout = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <div className="grid md:grid-cols-3">
      <div className="md:col-span-1 md:flex md:justify-end">
        <Navbar />
      </div>
      <main className="px-16 py-6 md:col-span-2 bg-gray-100">
        <div className="flex justify-center md:justify-end">
          {isAuthenticated ? (
            <>
              <Link
                to="/bookings"
                className="btn text-primary border-primary md:border-2 hover:bg-primary hover:text-white transition ease-out duration-500 mr-2"
              >
                My Bookings
              </Link>
            <button
              onClick={logout}
              className="btn text-primary border-primary md:border-2 hover:bg-primary hover:text-white transition ease-out duration-500"
            >
              Log out
            </button>
            </>
          ) : (
            <>
              <Link
                to="/signin"
                className="btn text-primary border-primary md:border-2 hover:bg-primary hover:text-white transition ease-out duration-500"
              >
                Log in
              </Link>
              <Link
                to="/signup"
                className="btn text-primary ml-2 border-primary md:border-2 hover:bg-primary hover:text-white transition ease-out duration-500"
              >
                Sign up
              </Link>
            </>
          )}
        </div>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
