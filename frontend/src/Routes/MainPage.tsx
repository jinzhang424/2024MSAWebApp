import './MainPage.css';

import NavigationBar from "../components/NavigationBar";
import { LandscapeNewsPanel } from "../components/NewsPanel"
import { ImageSlider } from "../components/ImageSlider";
import { imageSlides } from "../data/imageSlides.json";
import { Typography } from "@mui/material";

import greenTeaLatte from "../data/specialsImages/greenTea-latte.jpg";
import vanillaMilkTea from "../data/specialsImages/vanillaMilkTea.svg";
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

        <h1 className="specialsTitle">
          Specials
        </h1>

        <img src={greenTeaLatte} alt="green tea latte" className="greenTeaLatte"/>
        <div className="special1">

          <h1 className="special1Header">
            Green Tea Latte
          </h1>
          <Typography className="special2Body">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam omnis fuga reiciendis. Veritatis ipsa dignissimos quidem, maiores iure sed blanditiis fuga dicta earum delectus tempore accusamus asperiores, assumenda quibusdam magnam.
          </Typography>

          <Typography className="special2Body">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam omnis fuga reiciendis. Veritatis ipsa dignissimos quidem, maiores iure sed blanditiis fuga dicta earum delectus tempore accusamus asperiores, assumenda quibusdam magnam.
          </Typography>
        </div>

        <img src={vanillaMilkTea} alt="vanilla milk tea" className="vanillaMilkTea"/>
        <div className="special2">
          <h1 className="special2Header">
            Vanilla Pudding
          </h1>
          <Typography className="special2Body">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit earum nam at accusantium eaque error blanditiis iste vel voluptatum? Totam exercitationem tempora culpa eos earum, beatae adipisci sunt minus eaque!
          </Typography>
        </div>
      </div>

      <div className="news">
        <div className="newsPanel1">
          <LandscapeNewsPanel imageUrl={bobaAd} imageAlt="bobaAd" imageTitle="Buy 1 get 1 free!" panelOrientation="Portrait" text={news1Text}/>
        </div>

        <div className="newsPanel2">
          <LandscapeNewsPanel imageUrl={upcomingMacarons} imageAlt="Macarons image" imageTitle="Macarons" panelOrientation="Landscape" text={news2Text}/>
        </div>

        <div className="newsPanel3">
        <LandscapeNewsPanel imageUrl={upcomingMilkshakes} imageAlt="Milkshakes image" imageTitle="Milk Shakes" panelOrientation="Landscape" text={news3Text}/>
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
