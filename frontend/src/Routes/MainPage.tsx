import './MainPage.css';
import NavigationBar from "../components/NavigationBar";
import { ImageSlider } from "../components/ImageSlider";
import { imageSlides } from "../data/imageSlides.json";
import { Typography } from "@mui/material";
import greenTeaLatte from "../data/specialsImages/greenTea-latte.jpg";
import vanillaMilkTea from "../data/specialsImages/vanillaMilkTea.svg";

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
          panel1
        </div>

        <div className="newsPanel2">
          panel2
        </div>

        <div className="newsPanel3">
          panel3
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
