import React from 'react';

const SearchBox = ({ value, onChange }) => {
  return (
    <div>
      <label htmlFor="search">Search:</label>
      <input type="text" id="search" value={value} onChange={onChange} />
    </div>
  );
};

export default SearchBox;