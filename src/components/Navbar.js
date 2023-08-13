import React from "react";
import "./Navbar.css";
import { menuItems } from "./menuItems";
import { Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    neutral: {
      main: "#9a67ea",
      contrastText: "#fff",
    },
  },
});

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar_container">
          <h3>Rent A Property</h3>
        
        <ul className="navbar_menu">
          {menuItems.map((item, index) => {
            return (
              <li key={index} className="navbar_item">
                <a href={item.url}>{item.title}</a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="navbar_buttons">
        <ThemeProvider theme={theme}>
          <Button color="neutral" variant="outlined">
            Login
          </Button>
          <Button color="neutral" variant="contained">
            Sign Up
          </Button>
        </ThemeProvider>
      </div>
    </nav>
  );
}

export default Navbar;
