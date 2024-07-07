import './MainPage.css';

import { useState, useEffect } from "react";

import NavigationBar from "../components/NavigationBar";
import ContactsSection from "../components/ContactsSection"
import { NewsPanel } from "../components/NewsPanel"
import { ImageSlider } from "../components/ImageSlider";
import { imageSlides } from "../data/imageSlides.json";
import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Fab from '@mui/material/Fab';

import greenTeaLatte from "../data/specialsImages/greenTea-latte.jpg";
import chocolateOreoMilkTea from "../data/specialsImages/chocolateOreaMilkTea.jpg";

let special1Title: string = "Green Tea Latte";
let special1Text: string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ex sunt vero fuga, itaque sapiente iusto soluta necessitatibus illum consectetur suscipit incidunt qui odit nemo, quisquam, in quasi dolores nihil?"
let special2Title: string = "Oreo MilkShake";
let special2Text: string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ex sunt vero fuga, itaque sapiente iusto soluta necessitatibus illum consectetur suscipit incidunt qui odit nemo, quisquam, in quasi dolores nihil?"

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

  // Creating a delay for the change in z-index for the size bar
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

  // Typography themes for MUI

  const theme = createTheme();

  theme.typography.h2 = {
    fontSize: '2.6rem',
    '@media (max-width:600px)': {
      fontSize: '2.2rem',
    },
    '@media (max-width:400px)': {
      fontSize: '2.1rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '3.4rem',
    },
  };

  theme.typography.h3 = {
    fontSize: '2.4rem',
    '@media (max-width:600px)': {
      fontSize: '1.8rem',
    },
    '@media (max-width:450px)': {
      fontSize: '1.5rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '3rem',
    },
  };
  
  theme.typography.body1 = {
    '@media (max-width:450px)': {
      fontSize: '0.8rem',
    },

    '@media (min-width:1000px)': {
      fontSize: '1.3rem',
    },
  }

  theme.typography.body2 = {
    fontWeight: '550s',
  }

  return (
    <div className="layout">

        <div className="section1">
          <div className="navBar" style={navBarStyle}><NavigationBar /></div>
          <div className="imgSlider"><ImageSlider data={imageSlides}/></div>
        </div>
        
        <div className="specialsSection">

          <ThemeProvider theme={theme}>
            <Typography variant="h2" className="specials">
              Specials
            </Typography>
          </ThemeProvider>

          <div className="special1Container">
            <div className="special1TextContainter">
              <ThemeProvider theme={theme}>
                <Typography variant="h3" className="special1Title">
                  {special1Title}
                </Typography>
                <Typography variant="body1" className="special1Body">
                  {special1Text}
                </Typography>
              </ThemeProvider>

              <div className="orderButton1Container">
                <a href="tbd">
                  <Fab variant="extended" style={{ width: '130px' }}>
                      <ThemeProvider theme={theme}>
                        <Typography variant="body2">
                          Order Now
                        </Typography>
                      </ThemeProvider>
                    </Fab>
                </a>
              </div>
            </div>

            <img src={greenTeaLatte} alt="green tea latte special" className="special1Img" />
          </div>

          <div className="special2Container">
            <div className="special2TextContainer">
              <ThemeProvider theme={theme}>
                <Typography variant="h3" className="special2Title">
                  {special2Title}
                </Typography>
                <Typography variant="body1" className="special2Body">
                  {special2Text}
                </Typography>
              </ThemeProvider>

              <div className ="orderButton2Container">
                <a href="tbd">
                  <Fab variant="extended" style={{ width: '130px' }}>
                    <ThemeProvider theme={theme}>
                      <Typography variant="body2">
                        Order Now
                      </Typography>
                    </ThemeProvider>
                  </Fab>
                </a>
              </div>
            </div>

            <img src={chocolateOreoMilkTea} alt="chocolate milk tea speical" className="special2Img" />
          </div>
        </div>

        <div className="newsSection">
          <ThemeProvider theme={theme}>
            <Typography variant="h2" className="newsHeader">
              News
            </Typography>
          </ThemeProvider>

          <div className="newsPanels">
            <div className="panel newsPanel1">
              <NewsPanel 
                imageUrl={bobaAd} 
                imageAlt="boba ad" 
                imageTitle="New discount" 
                text={news1Text}>
              </NewsPanel>
            </div>
            <div className="panel newsPanel2">
              <NewsPanel 
                imageUrl={upcomingMilkshakes} 
                imageAlt="milk shakes" 
                imageTitle="New Milk Shakes" 
                text={news2Text}>
              </NewsPanel>
            </div>
            <div className="panel newsPanel3">
              <NewsPanel 
                imageUrl={upcomingMacarons} 
                imageAlt="macarons" imageTitle="New Macarons" 
                text={news3Text}>
              </NewsPanel>
            </div>
          </div>
        </div>

        <div className="contactsSection">
          <ContactsSection />
        </div>
    </div>
  );
};
