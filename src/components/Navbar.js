
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('auth')); // Get logged-in user info from localStorage

  const handleLogout = () => {
    localStorage.removeItem('auth'); // Clear user session
    navigate('/login'); // Redirect to login page after logout
  };

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-teal-500 p-4 flex justify-between items-center">
      <Link to="/" className="text-white text-2xl font-bold">QuizApp</Link>
      <div>
        {user ? (
          <>
            <Link to="/quizzes" className="text-white mr-6">Quizzes</Link>
            <Link to="/profile" className="text-white mr-6">Profile</Link>
            <button 
              onClick={handleLogout} 
              className="text-white mr-6"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="text-white mr-6">Login</Link>
            <Link to="/signup" className="text-white mr-6">Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
