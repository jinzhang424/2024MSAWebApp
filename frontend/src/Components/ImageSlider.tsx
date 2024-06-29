import "./ImageSlider.css";
import { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

interface Image {
    src: string;
    alt: string;
}

interface ImageSliderProps {
    data: Image[];
}

export const ImageSlider = ({ data } : ImageSliderProps) => {

    const [slide, setSlide] = useState(0);
    
    const nextSlide = () => {
        setSlide(slide === data.length - 1 ? 0 : slide + 1);
    }

    const prevSlide = () => {
        setSlide(slide === 0 ? data.length - 1 : slide - 1);
    }



    return <div className = "imageSlider">

        {data.map((imageItem, index) => {
            return <img 
                src={imageItem.src} 
                alt = {imageItem.alt}
                key = {index}
                className={ slide === index ? "slideVisible" : "slideHidden" }
            />
        })}

        <BsArrowLeftCircleFill onClick={prevSlide} className="arrow leftArrow" />
        <BsArrowRightCircleFill onClick={nextSlide} className="arrow rightArrow" />

        <span className="indicators">
            {data.map((_, index) => {
                return <button 
                    key={index} 
                    onClick={() => setSlide(index)} 
                    className={slide === index ? "indicator" : "indicator inactiveIndicator"}
                ></button>
            })}
        </span>
    </div>
};