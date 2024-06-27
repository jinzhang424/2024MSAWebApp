import NavigationBar from "../components/NavigationBar";
import { ImageSlider } from "../components/ImageSlider";
import { imageSlides } from "../data/imageSlides.json";
import img1 from "../data/images/foreground.png";

export default function Root() {
  return <>
  <div className="layout">

      <NavigationBar />
      <img src={img1} alt="foreground" className="img1" />
      <ImageSlider data={imageSlides}/>

  </div>
  </>
}
