import React, { useState } from 'react';
import Select from 'react-select';
import styles from '../style';
import { candidatesData } from '../constants/index';

const uniqueLocations = Array.from(new Set(candidatesData.map(candidate => candidate.location)));

const countryOptions = uniqueLocations.map(location => ({
  value: location,
  label: location,
}));

const Candidate = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [searchJobRole, setSearchJobRole] = useState('');
  const [filteredCandidates, setFilteredCandidates] = useState(candidatesData);

  const handleSearch = () => {
    const filtered = candidatesData.filter(
      (candidate) =>
        (!selectedLocation || candidate.location === selectedLocation.value) &&
        candidate.jobRole.toLowerCase().includes(searchJobRole.toLowerCase())
    );
    setFilteredCandidates(filtered);
  };

  const handleClearFilters = () => {
    setSelectedLocation(null);
    setSearchJobRole('');
    setFilteredCandidates(candidatesData);
  };

  return (
    <div className={`${styles.paddingY} mt-14 flex flex-col lg:flex-row h-screen`}>
      <div className="w-full px-4">
        <h2 className="mb-4 text-2xl font-bold text-white">Search Candidates</h2>
        <div className="flex items-center mb-4">
          <div className="w-1/2 mr-2">
            <label htmlFor="locationSelect" className="block text-dimWhite">
              Location:
            </label>
            <Select
              id="locationSelect"
              options={countryOptions}
              value={selectedLocation}
              onChange={(option) => setSelectedLocation(option)}
              className="w-full"
              isClearable
              placeholder="Select location..."
            />
          </div>
          <div className="w-1/2 ml-2">
            <label htmlFor="jobRoleInput" className="block text-dimWhite">
              Job Role:
            </label>
            <input
              id="jobRoleInput"
              type="text"
              value={searchJobRole}
              onChange={(e) => setSearchJobRole(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <button
            onClick={handleSearch}
            className="px-4 py-2 ml-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
          >
            Search
          </button>
          <button
            onClick={handleClearFilters}
            className="px-4 py-2 ml-2 font-bold text-white bg-red-500 rounded hover:bg-red-700"
          >
            Clear Filters
          </button>
        </div>
        <hr className="my-6 border-gray-500" />

        <h2 className="mt-4 text-2xl font-bold text-white">Candidate List</h2>
        <div className="flex flex-wrap mt-4 overflow-y-auto text-white" style={{ maxHeight: 'calc(100vh - 300px)' }}>
          {filteredCandidates.map((candidate) => (
            <div key={candidate.id} className="w-full p-2 sm:w-1/2 lg:w-1/3 xl:w-1/4">
              <div className="bg-[#29347a] rounded shadow">
                <div className="flex items-center p-4">
                  <img
                    src={candidate.image}
                    alt={`Candidate ${candidate.id}`}
                    className="w-16 h-16 mr-4 rounded-full"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{candidate.name}</h3>
                    <p className="text-dimWhite">{candidate.jobRole}</p>
                    <div className="mt-4">
                      <p className="text-sm text-dimWhite">Contact Information:</p>
                      <p>{candidate.email}</p>
                      <p>{candidate.phone}</p>
                    </div>
                  </div>
                </div>
                <p className="p-4 mt-2">{candidate.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Candidate;
