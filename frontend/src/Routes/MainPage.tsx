import './MainPage.css';

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
  return <>
  <div className="layout">

      <div className="navBar"><NavigationBar /></div>
      <div className="imgSlider"><ImageSlider data={imageSlides}/></div>

      <div className="specials">

        <h1 className="SpecialsTitle">
          Specials
        </h1>

        <div className="specialsPanels">
          <div className="specialsPanel1">
            <SpecialsPanel imageUrl={chocolateOreaMilkTea} imageAlt="bobaAd" imageTitle="Buy 1 get 1 free!" text={news1Text}/>
          </div>

          <div className="specialsPanel2">
            <SpecialsPanel imageUrl={upcomingMacarons} imageAlt="Macarons image" imageTitle="Macarons" text={news2Text}/>
          </div>

          <div className="specialsPanel3">  
          <SpecialsPanel imageUrl={upcomingMilkshakes} imageAlt="Milkshakes image" imageTitle="Milk Shakes" text={news3Text}/>
          </div>
        </div>
      </div>

      <div className="news">

        <h1 className="newsTitle">
          News
        </h1>

        <img src={greenTeaLatte} alt="green tea latte ad" className="greenTeaLatteAd"/>
        <div className="news1">

          <h1 className="news1Header">
            Upcoming Green Tea Latte!
          </h1>
          <Typography className="news1Body">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam omnis fuga reiciendis. Veritatis ipsa dignissimos quidem, maiores iure sed blanditiis fuga dicta earum delectus tempore accusamus asperiores, assumenda quibusdam magnam.
          </Typography>
        </div>

        <img src={bobaAd} alt="boba ad" className="bobaAd"/>
        <div className="news2">
          <h1 className="news2Header">
            Buy 1 get 1 free!
          </h1>
          <Typography className="news2Body">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit earum nam at accusantium eaque error blanditiis iste vel voluptatum? Totam exercitationem tempora culpa eos earum, beatae adipisci sunt minus eaque!
          </Typography>
        </div>
      </div>

      <div className="contacts">

        <h1 className="contactUsTitle">
          Contact Us
        </h1>

        <div className="contactInfo">
          <div className="address">
            Address
          </div>
          <div className="phone">
            phone
          </div>
          <div className="email">
            email
          </div>
          <div className="socials">
            social media
          </div>
        </div>
      </div>
  </div>
  </>
}
