import React, { useEffect, useRef, useState } from 'react';
import './SearchBar.css';

function SearchBar() {
  

  return (
    <div className="search-bar">
      <div className="input-section">
        <div className="location-icon">
          <i className="fas fa-map-marker-alt"></i>
        </div>
        <input className="loc" type="text" placeholder="City, destination or hotel name" />
        <div className="divider"></div>
        <input

          className="dt"
          type='text'
          placeholder='Date of Stay'
        />
        <div className="divider"></div>
        <input className="nm" type="number" placeholder="Add guest" />
      </div>
      <button className="sbt" type="submit">
        <i className="button-icon fas fa-search"></i>
      </button>
    </div>
  );
}

export default SearchBar;
