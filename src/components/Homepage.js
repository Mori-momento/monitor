import React, { useState } from 'react';
import Signup from './Signup';
import Login from './Login';

const Homepage = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSignupForm, setShowSignupForm] = useState(false);

  const handleLoginClick = () => {
    setShowLoginForm(true);
    setShowSignupForm(false); // hide the signup form if it's currently displayed
  };

  const handleSignupClick = () => {
    setShowSignupForm(true);
    setShowLoginForm(false); // hide the login form if it's currently displayed
  };

  const handleLoginFormSubmit = (event) => {
    event.preventDefault();
    // Implement login logic here
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-8">Company Name</h1>
      {showLoginForm ? (
        <Login />
      ) : showSignupForm ? (
        <Signup />
      ) : (
        <div className="space-x-4">
          <button onClick={handleLoginClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Login
          </button>
          <button onClick={handleSignupClick} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Sign Up
          </button>
        </div>
      )}
    </div>
  );
};

export default Homepage;
