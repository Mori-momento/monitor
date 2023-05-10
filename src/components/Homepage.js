// import React, { useState } from 'react';
import Signup from './Signup';
import Login from './Login';
import { Link } from 'react-router-dom';

const Homepage = () => {


  return (
        <div className=" flex justify-center items-center h-screen bg-blue-200">
          {/* <div className='h-[100vh]' ></div> */}
          <div className='w-full  flex flex-col items-center relative top-[-150px]'>
          <h1 className="text-[80px] font-bold mb-8">Monitor</h1>
          <Link to='/login' >
          <img alt='logo' className='h-40 ' src='./images/logo.png'></img>
          </Link>
          <p className='sm:hidden mt-8 text-gray-600 text-[20px] w-full'>our website is not yet available on mobile-devices</p>

          </div>
    {/* <div className='hidden sm:flex w-1/2 h-3/4 justify-center items-start hide-in-mobile' >
    <Login/>
    <Signup/>

    </div> */}
        </div>


  );
};

export default Homepage;
