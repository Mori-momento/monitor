import React from 'react';
import {Link} from 'react-router-dom';


const Pages = () => {
  return (
    <div className="flex flex-wrap w-screen h-screen bg-blue-200 h-screen items-center justify-center">
      <div className="w-[250px] m-4 p-4 h-[350px] bg-white rounded-lg hover:shadow-2xl transition duration-200 ">
        <Link to='/contamination' className="">
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-2">Contamination</h3>
            <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </Link>
      </div>
      <div className="w-[250px] m-4 p-4 h-[350px] bg-white rounded-lg hover:shadow-2xl transition duration-200 ">
        <Link to='/pipelines' className="">
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-2">Pipe Line</h3>
            <p className="text-gray-600 text-sm">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </Link>
      </div>
      <div className="w-[250px] m-4 p-4 h-[350px] bg-white rounded-lg hover:shadow-2xl transition duration-200 ">
        <Link to='/leaks' className="">
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-2">Leaks</h3>
            <p className="text-gray-600 text-sm">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </Link>
      </div>
      <div className="w-[250px] m-4 p-4 h-[350px] bg-white rounded-lg hover:shadow-2xl transition duration-200 ">
        <Link to='/contactus' className="">
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <p className="text-gray-600 text-sm">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Pages;
