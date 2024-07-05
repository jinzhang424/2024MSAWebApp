import './MainPage.css';

import React, { useState, useEffect } from "react";

import NavigationBar from "../components/NavigationBar";
import { SpecialsPanel } from "../components/SpecialsPanel"
import { ImageSlider } from "../components/ImageSlider";
import { imageSlides } from "../data/imageSlides.json";
import { Typography } from "@mui/material";

import greenTeaLatte from "../data/specialsImages/greenTea-latte.jpg";
import chocolateOreaMilkTea from "../data/specialsImages/chocolateOreaMilkTea.jpg";

import upcomingMacarons from "../data/images/upcomingMacarons.jpg";
import upcomingMilkshakes from "../data/images/upcomingMilkshakes.jpg";
import bobaAd from "../data/images/bobaAd.png";

let news1Text: string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ex sunt vero fuga, itaque sapiente iusto soluta necessitatibus illum consectetur suscipit incidunt qui odit nemo, quisquam, in quasi dolores nihil?"
let news2Text: string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ex sunt vero fuga, itaque sapiente iusto soluta necessitatibus illum consectetur suscipit incidunt qui odit nemo, quisquam, in quasi dolores nihil?"
let news3Text: string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ex sunt vero fuga, itaque sapiente iusto soluta necessitatibus illum consectetur suscipit incidunt qui odit nemo, quisquam, in quasi dolores nihil?"

export default function Root() {

  const [isSideBarActive, setIsSideBarActive] = useState(false);
  const [navBarZIndex, setNavBarZIndex] = useState(1);

  useEffect(() => {
    const checkSideBarActive = () => {
      setIsSideBarActive(isSideBarActiveChecked());
    };

    checkSideBarActive();

    document.getElementById('sideBarActive')?.addEventListener('change', checkSideBarActive);

    return () => {
      document.getElementById('sideBarActive')?.removeEventListener('change', checkSideBarActive);
    };
  }, []);

  useEffect(() => {
    if (isSideBarActive) {
      setNavBarZIndex(3);
    } else {
      setTimeout(() => {
        setNavBarZIndex(1);
      }, 310); 
    }
  }, [isSideBarActive]);

  function isSideBarActiveChecked() {
    const checkbox = document.getElementById('sideBarActive') as HTMLInputElement;
    return checkbox ? checkbox.checked : false;
  }

  const navBarStyle = {
    zIndex: navBarZIndex,
  };

  return (
    <div className="layout">

        <div className="section1">
          <div className="navBar" style={navBarStyle}><NavigationBar /></div>
          <div className="imgSlider"><ImageSlider data={imageSlides}/></div>
        </div>

    </div>
  );
};
