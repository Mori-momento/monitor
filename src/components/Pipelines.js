import React, { useState } from 'react';

const Pipelines = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCity, setSelectedCity] = useState('placeholder');

    const cities = [
        { name: 'Mumbai', image: 'mumbai.jpg' },
        { name: 'Delhi', image: 'delhi.jpg' },
        { name: 'Bangalore', image: 'mumbai.jpg' },
        { name: 'Chennai', image: 'mumbai.jpg' },
        { name: 'Kolkata', image: 'mumbai.jpg' },
        { name: 'Hyderabad', image: 'mumbai.jpg' },
        { name: 'Pune', image: 'pune.jpg' },
    ];

    const filteredCities = cities.filter(city =>
        city.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleCitySelection = (city) => {
        setSelectedCity(city.name);
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            if (filteredCities.length > 0) {
                setSelectedCity(filteredCities[0].name);
            }
        }
    }

    return (
        <div className=" relative h-screen flex flex-col items-center p-8 bg-blue-200 ">
            <div className='absolute right-0 w-[280px] bg-white rounded-md h-[90vh] p-4 overflow-y-scroll opacity-[75%] text-left ' >
                <span className='text-[30px] font-bold ' >Pipeline Map Updates</span>
            <ul>
      <li>&#8226; There will be updates and changes made to the pipeline network in Mumbai's Ward G.</li>
      <li>&#8226; The changes are likely to affect the existing pipeline infrastructure and may require modifications or upgrades.</li>
      <li>&#8226; The updates could result in improved efficiency and reliability of the pipeline network.</li>
      <li>&#8226; The changes could potentially impact residents and businesses in the area, particularly those who rely on the pipeline for their water supply.</li>
      <li>&#8226; It is important for residents and businesses in Ward G to stay informed about the updates and changes to the pipeline network to prepare for any potential disruptions or inconveniences.</li>
    </ul>

            </div>
            <div className='' >

                <input
                    type="text"
                    placeholder="Search for a city"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="p-2 rounded-lg border-gray-400 border-2 mb-4 flex justify-center w-[500px] "
                />
                {searchTerm && (
                    <ul className="list-none p-0 m-0 w-64 rounded-lg shadow-lg w-[500px] absolute">
                        {filteredCities.map(city => (
                            <li
                                key={city.name}
                                onClick={() => handleCitySelection(city)}
                                className="p-2 cursor-pointer bg-gray-100 hover:bg-gray-200"
                            >
                                {city.name}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            {selectedCity && (
                <img
                    src={`./images/${selectedCity.toLowerCase()}.jpg`}
                    alt={selectedCity.toLowerCase()}
                    className="w-1/2 mt-20 rounded-lg shadow-lg"
                />
            )}
        </div>
    );
};

export default Pipelines;
