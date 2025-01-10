import React, { useState } from 'react';
import './SearchBar.css'; 

function SearchBar({ onSubmit }) {
  const [location, setLocation] = useState("");

  return (
    <>
    <div className="app-name">SkySense</div>
    <div className="search-bar">
      <input
        type="text"
        className="search-input"
        placeholder="Search location"
        onChange={(e) => setLocation(e.target.value)}
      />
      <div className="button-group">
        <button className="btn submit-btn" onClick={() => onSubmit(location)}>
          Submit
        </button>
        <button className="btn refresh-btn" onClick={() => onSubmit(location)}>
          Refresh
        </button>
      </div>
    </div>
        </>
  );
}

export default SearchBar;
