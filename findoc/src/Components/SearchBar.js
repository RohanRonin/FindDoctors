import React from 'react';
import './SearchBar.css';

const SearchBar = ({ searchTerm, handleSearchChange }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search hospitals..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default SearchBar;
