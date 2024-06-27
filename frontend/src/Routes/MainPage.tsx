import NavigationBar from "../components/NavigationBar";
import { ImageSlider } from "../components/ImageSlider";
import { imageSlides } from "../data/imageSlides.json";

export default function Root() {
  return <>
    <NavigationBar />
    <ImageSlider data={imageSlides}/>
  </>
}
