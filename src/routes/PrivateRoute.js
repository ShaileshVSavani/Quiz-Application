
import React from 'react';
import { Navigate } from 'react-router-dom';

// Check if the user is authenticated
const isAuthenticated = () => {
  return localStorage.getItem('auth') !== null; // Check if 'auth' exists in localStorage
};

const PrivateRoute = ({ element }) => {
  return isAuthenticated() ? element : <Navigate to="/login" />;
};

export default PrivateRoute;
