'use client';

import { useState } from 'react';

const SearchBar = () => {
  const [search, setSearch] = useState('');
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', search);
    // Here you would typically filter the jobs or navigate to search results
  };
  
  return (
    <div className="bg-blue-600 py-8">
      <div className="container mx-auto px-4">
        <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Search for jobs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-grow px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <select className="px-4 py-3 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-400">
            <option value="">All Locations</option>
            <option value="usa">USA</option>
            <option value="uk">UK</option>
            <option value="canada">Canada</option>
            <option value="india">India</option>
            <option value="australia">Australia</option>
          </select>
          <button 
            type="submit"
            className="bg-blue-800 text-white px-6 py-3 rounded-md hover:bg-blue-900 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchBar; 