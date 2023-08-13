import React from "react";

const FilterBar = ({ types, locations, onFilterChange }) => {
  return (
    <div className="filter-bar">
      <select onChange={(e) => onFilterChange("type", e.target.value)}>
        <option value="">Select Property Type</option>
        {types.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
      <select onChange={(e) => onFilterChange("location", e.target.value)}>
        <option value="">Select Location</option>
        {locations.map((location) => (
          <option key={location} value={location}>
            {location}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterBar;
