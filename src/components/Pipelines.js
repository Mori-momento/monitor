import React, { useState } from 'react';

const Pipelines = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCity, setSelectedCity] = useState('');

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
        <div className="h-screen flex flex-col items-center p-8 bg-blue-200 ">
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
