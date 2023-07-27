import React, { useState } from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Header() {
  const [clicked, setClicked] = useState(false);

  const toggleMenu = () => {
    setClicked(!clicked);
  };

  return (
    <div className="container">
      <a href="/">
        <img src="/images/logo.svg" alt="" />
      </a>
      <div className="menu">
        <a href=".">Model S</a>
        <a href=".">Model 3</a>
        <a href=".">Model X</a>
        <a href=".">Model Y</a>
      </div>
      <div className="rightMenu">
        <a href=".">Shop</a>
        <a href=".">Tesla Account</a>

        <div>
          {clicked ? (
            <div className="burgerNav">
              <div className="closeIcon" onClick={toggleMenu}>
                <CloseIcon />
              </div>
            
                <li>
                  <a href=".">Existing Inventory</a>
                </li>
                <li>
                  <a href=".">Used Inventory</a>
                </li>
                <li>
                  <a href=".">Trade-in</a>
                </li>
                <li>
                  <a href=".">Cybertruck</a>
                </li>
                <li>
                  <a href=".">Roadaster</a>
                </li>
                <li>
                  <a href=".">Semi</a>
                </li>
                <li>
                  <a href=".">Charging</a>
                </li>
                <li>
                  <a href=".">Power</a>
                </li>
                <li>
                  <a href=".">Communication</a>
                </li>
                <li>
                  <a href=".">Utilites</a>
                </li>
                <li>
                  <a href=".">Test Drive</a>
                </li>
              
            </div>
          ) : (
            <div className="customMenu" onClick={toggleMenu}>
              <MenuIcon />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
