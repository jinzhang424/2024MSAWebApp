import './MainPage.css';
import NavigationBar from "../components/NavigationBar";
import { ImageSlider } from "../components/ImageSlider";
import { imageSlides } from "../data/imageSlides.json";

export default function Root() {
  return <>
  <div className="layout">

      <div className="navBar"><NavigationBar /></div>
      <div className="imgSlider"><ImageSlider data={imageSlides}/></div>
      <div className="specials">specials</div>
      <div className="news">news</div>
      <div className="contacts">contact info</div>
  </div>
  </>
}
