import React from 'react';

const ContactUs = () => {
    return (
        <div className="h-screen flex flex-col items-center p-8 bg-blue-200">
            <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
            <div>
                <div className="grid grid-cols-3 gap-8 w-full">
                    <div className="bg-white rounded-lg shadow-lg p-8">
                        <div className="h-40 w-40 mx-auto bg-gray-400 rounded-full mb-4 overflow-hidden ">
                            <img src='./images/raj.jpg' alt='' />
                        </div>
                        <p className="text-center font-bold mb-2">Raj Salvi</p>
                        <p className="text-center">+91 70451 07959</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-8">
                        <div className="h-40 w-40 mx-auto bg-gray-400 rounded-full mb-4 overflow-hidden ">

                            <img src='./images/namdeo.jpg' alt='' />
                        </div>
                        <p className="text-center font-bold mb-2">Namdeo Badhe</p>
                        <p className="text-center"></p>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-8">
                        <div className="h-40 w-40 mx-auto bg-gray-400 rounded-full mb-4 overflow-hidden ">

                            <img src='./images/sachet.jpg' alt='' />
                        </div>
                        <p className="text-center font-bold mb-2">Sachet Engineer</p>
                        <p className="text-center">+91 81699 01358</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
