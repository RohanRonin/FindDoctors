import React from 'react';
import './SearchBar.css';  // Ensure you create and style this CSS file

const SearchBar = ({ searchTerm, handleSearchChange }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default SearchBar;
