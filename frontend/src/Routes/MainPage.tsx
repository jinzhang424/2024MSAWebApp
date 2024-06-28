import './MainPage.css';
import NavigationBar from "../components/NavigationBar";
import { ImageSlider } from "../components/ImageSlider";
import { imageSlides } from "../data/imageSlides.json";

export default function Root() {
  return <>
  <div className="layout">

      <NavigationBar />
      <ImageSlider data={imageSlides}/>

  </div>
  </>
}
