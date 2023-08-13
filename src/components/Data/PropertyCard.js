import React from "react";
import "./Property.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BathtubIcon from "@mui/icons-material/Bathtub";
import SingleBedIcon from "@mui/icons-material/SingleBed";
import CropLandscapeIcon from "@mui/icons-material/CropLandscape";

function PropertyCard({ propertiesss }) {
  return (
    <div className="single-property">
      {propertiesss.map((property) => {
        return (
          <div className="card">
            <img className="card-image" src={property.cover} alt="Logo" />

            <div className="card-details">
              <div className="price-like">
                <div className="price-month">
                  <div className="price">
                    <h2>{property.price}</h2>
                  </div>
                  <div className="in-text">
                    <b>/month</b>
                  </div>
                </div>
                <div className="card-like-icon">
                  <FavoriteIcon className="card-like-icon" />
                </div>
              </div>
              <div className="name-location">
                <div className="name">
                  <h2>{property.name}</h2>
                </div>
                <div className="in-text">
                  <b>{property.location}</b>
                </div>
              </div>
              <hr className="hrr"></hr>
              <div className="details">
                <div className="info">
                  <div className="icon">
                    <SingleBedIcon />
                  </div>
                  <div className="in-text">
                    <b>4 Beds</b>
                  </div>
                </div>
                <div className="info">
                  <div className="icon">
                    <BathtubIcon />
                  </div>
                  <div className="in-text">
                    <b>3 Bathrooms</b>
                  </div>
                </div>
                <div className="info">
                  <div className="icon">
                    <CropLandscapeIcon />
                  </div>
                  <div className="in-text">
                    <b>5 X 7 m </b>
                    <sup>2</sup>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default PropertyCard;
