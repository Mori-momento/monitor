import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here, you would handle the submission of the login information
    console.log('email:', email);
    console.log('password:', password);
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-10 rounded-lg shadow-lg">
        <h2 className="text-2xl mb-5">Login</h2>
        <div className="mb-5">
          <label className="block font-semibold mb-1">Email</label>
          <input type="email" value={email} onChange={handleEmailChange} className="w-full border-2 border-gray-300 p-2 rounded-lg" />
        </div>
        <div className="mb-5">
          <label className="block font-semibold mb-1">Password</label>
          <input type="password" value={password} onChange={handlePasswordChange} className="w-full border-2 border-gray-300 p-2 rounded-lg" />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg">Login</button>
      </form>
    </div>
  );
};

export default Login;
