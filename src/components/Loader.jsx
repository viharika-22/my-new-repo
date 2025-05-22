
import React from 'react';
import './Loader.css'; // create this for styling

function Loader() {
  return (
    <div className="loader-wrapper">
      <div className="spinner"></div>
      <p>Loading...</p>
    </div>
  );
}

export default Loader;
