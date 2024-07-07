import React, { useState, useEffect } from "react"; 
import './NavigationBar.css';
import imgLogo from "../data/images/logo.svg";

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const NavigationBar = () => {

  return (
      <nav className="navBarContainer">

          <a href="/" className="logoLink">
            <img 
              src={imgLogo} 
              alt="Bobuzz logo" 
              className="logo"
            />
          </a>

        <input type="checkbox" id="sideBarActive"/>

        <label htmlFor="sideBarActive" id="overlay"></label>

        <label htmlFor="sideBarActive" className="openSideBarButton">
          <MenuIcon fontSize="large" sx={{ color: "white", filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.4))" }} />
        </label>

        <div className="linksContainer">
          <label htmlFor="sideBarActive" className="closeSideBarButton">
            <CloseIcon fontSize="large" sx={{ color: "white" }} />
          </label>
          
          <nav className="links">
            <a href="/" className="navBarLink">Home</a>
            <a href="/about-us" className="navBarLink">About Us</a>
            <a href="order/" className="navBarLink">Order</a>
          </nav>
        </div>

      </nav>

  )
}

export default NavigationBar