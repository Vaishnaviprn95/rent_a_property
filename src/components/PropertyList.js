import React from "react";

const PropertyList = ({ properties }) => {
  return (
    <div className="property-list">
      {properties.map((property) => (
        <div key={property.id} className="property">
          <h2>{property.title}</h2>
          <p>Type: {property.type}</p>
          <p>Price: {property.price}</p>
          <p>Location: {property.location}</p>
        </div>
      ))}
    </div>
  );
};

export default PropertyList;
