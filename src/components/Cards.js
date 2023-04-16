import React from 'react';
import { useHistory } from 'react-router-dom';

const Cards = () => {
  const history = useHistory();

  const handleCardClick = (componentName) => {
    history.push(`/${componentName}`);
  };

  return (
    <div className="bg-gray-100 flex flex-wrap justify-center items-center p-4">
      <div className="w-72 h-80 rounded-lg overflow-hidden shadow-lg hover:scale-105 cursor-pointer transform transition duration-300" onClick={() => handleCardClick('Contamination')}>
        <div className="bg-white h-full flex flex-col justify-between p-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Contamination</h3>
            <p className="text-gray-600">Learn about the contamination of the local water supply.</p>
          </div>
          <div className="text-right">
            <p className="text-gray-500">Click to learn more</p>
          </div>
        </div>
      </div>
      <div className="w-72 h-80 rounded-lg overflow-hidden shadow-lg hover:scale-105 cursor-pointer transform transition duration-300" onClick={() => handleCardClick('Pipeline')}>
        <div className="bg-white h-full flex flex-col justify-between p-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Pipeline</h3>
            <p className="text-gray-600">Learn about the new water pipeline being constructed.</p>
          </div>
          <div className="text-right">
            <p className="text-gray-500">Click to learn more</p>
          </div>
        </div>
      </div>
      <div className="w-72 h-80 rounded-lg overflow-hidden shadow-lg hover:scale-105 cursor-pointer transform transition duration-300" onClick={() => handleCardClick('Leaks')}>
        <div className="bg-white h-full flex flex-col justify-between p-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Leaks</h3>
            <p className="text-gray-600">Learn about the recent leaks in the pipelines.</p>
          </div>
          <div className="text-right">
            <p className="text-gray-500">Click to learn more</p>
          </div>
        </div>
      </div>
      <div className="w-72 h-80 rounded-lg overflow-hidden shadow-lg hover:scale-105 cursor-pointer transform transition duration-300">
        <div className="bg-white h-full flex flex-col justify-between p-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
            <p className="text-gray-600">Get in touch with us for more information.</p>
          </div>
          <div className="text-right">
            <button className="bg-purple-500 text-white rounded-md px-4 py-2 hover:bg-purple-600">Contact</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
