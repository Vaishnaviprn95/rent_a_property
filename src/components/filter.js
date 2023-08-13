import React, { useEffect } from "react";
import "./filter.css";
import { Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import PropertyCard from "./Data/PropertyCard";
import { properties } from "./Data/properties"; 

const theme = createTheme({
  palette: {
    neutral: {
      main: "#9a67ea",
      contrastText: "#fff",
    },
  },
});

function Filter() {
  const [location, setLocation] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [type, setType] = React.useState("");
  const [userData, setUserData] = React.useState([]);

  useEffect(() => {
    setUserData(properties);
  }, [location, type]);

  const handleSearch = () => {
    // debugger;

    const newData = userData.filter(
      (x) => x.location.includes(location) && x.type.includes(type)
    );

    // .filter((y) =>
    //   Number(price) === 3000 ? Number(y.price) < 3000 : Number(y.price) > 3000
    // );
    // console.log("userDate", newData);
    setUserData(newData);
  };

  return (
    <>
      <div className="container">
        <form className="flex">
          <div className="box">
            <span>Location</span>

            <select
              value={location}
              onChange={(event) => setLocation(event.target.value)}
            >
              <option value="Location">Location</option>
              <option value="Pune">Pune</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Nashik">Nashik</option>
              <option value="Kolkata">Kolkata</option>
              <option value="Banglore">Banglore</option>
              <option value="Chennai">Chennai</option>
            </select>
          </div>
          <div className="box">
            <span>When</span>

            <select>
              <option id="0">Move-in Date</option>
            </select>
          </div>
          <div className="box">
            <span>Price</span>

            <select
              value={price}
              onChange={(event) => setPrice(event.target.value)}
            >
              <option value="Price">Price</option>
              <option value="20000"> ₹15,000-₹50,000 </option>
              <option value="60000"> ₹51,000-₹1,00,000</option>
              <option value="105000"> Above ₹1,00,000 </option>
            </select>
          </div>
          <div className="box">
            <span>Property Type</span>

            <select
              name="type"
              value={type}
              onChange={(event) => setType(event.target.value)}
            >
              <option value="Property Type">Property Type</option>
              <option value="Houses">Houses</option>
              <option value="Apartments">Apartments</option>
              <option value="Condo">Condo</option>
            </select>
          </div>
          <div className="button">
            <ThemeProvider theme={theme}>
              <Button
                color="neutral"
                variant="contained"
                onClick={() => handleSearch()}
              >
                Search
              </Button>
            </ThemeProvider>
          </div>
        </form>
      </div>
      {userData && userData.length > 0 ? (
        <PropertyCard propertiesss={userData} />
      ) : (
        <div className="error">
          <h1>Oops! No matching results found</h1>
        </div>
      )}
    </>
  );
}

export default Filter;
