// import React, { useState } from 'react';
import Signup from './Signup';
import Login from './Login';

const Homepage = () => {


  return (
        <div className=" flex justify-center items-center h-screen bg-blue-200">
          {/* <div className='h-[100vh]' ></div> */}
          <div className='w-1/2 flex flex-col items-center relative top-[-150px]'>
          <h1 className="text-[80px] font-bold mb-8">Monitor</h1>
          <img className='h-40' src='./images/logo.png'></img>

          </div>
    <div className='flex w-1/2 h-3/4 justify-center items-start' >
    <Login/>
    <Signup/>

    </div>
        </div>


  );
};

export default Homepage;
