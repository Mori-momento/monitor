import React from 'react';

const ContactUs = () => {
    return (
        <div className="h-screen flex flex-col items-center p-8 bg-blue-200">
            <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
            <div>
                <div className="grid grid-cols-3 gap-8 w-full">
                    <div className="bg-white rounded-lg shadow-lg p-8">
                        <div className="h-40 w-40 mx-auto bg-gray-400 rounded-full mb-4 overflow-hidden ">
                            <img src='./images/legacy.jpg' alt='' />
                        </div>
                        <p className="text-center font-bold mb-2">Name</p>
                        <p className="text-center">000-000-0000</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-8">
                        <div className="h-40 w-40 mx-auto bg-gray-400 rounded-full mb-4 overflow-hidden ">

                            <img src='./images/legacy.jpg' alt='' />
                        </div>
                        <p className="text-center font-bold mb-2">Name</p>
                        <p className="text-center">000-000-0000</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-8">
                        <div className="h-40 w-40 mx-auto bg-gray-400 rounded-full mb-4 overflow-hidden ">

                            <img src='./images/legacy.jpg' alt='' />
                        </div>
                        <p className="text-center font-bold mb-2">Name</p>
                        <p className="text-center">000-000-0000</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
