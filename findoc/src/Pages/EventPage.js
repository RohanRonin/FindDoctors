import React, { useState } from 'react';

import SearchBar from '../Components/SearchBar/SearchBar';
import './EventPage.css';
import NavBar from '../Components/NavBar/NavBar';

const EventPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="event-page">
      <NavBar />
      <div className="content">
        <div className="event-search-container">
          <SearchBar 
            searchTerm={searchTerm} 
            handleSearchChange={handleSearchChange} 
            placeholder="Search for events..." 
          />
        </div>
        <h1>Events</h1>
        <p>This is the Events page. You can list all the upcoming and past events here.</p>
      </div>
    </div>
  );
};

export default EventPage;
