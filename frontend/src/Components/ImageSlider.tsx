import "./NavigationBar.css";
import "./ImageSlider.css";
import { useState } from "react";

import Fab from '@mui/material/Fab';
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";

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



    return (
    
        <div className = "sliderContainer">

            {data.map((imageItem, index) => {
                return <img 
                    src={imageItem.src} 
                    alt = {imageItem.alt}
                    key = {index}
                    className={ slide === index ? "slideVisible" : "slideHidden" }
                />
            })}

            <Fab aria-label="ArrowLeftIcon" onClick={prevSlide} className="arrow leftArrow">
                <ArrowLeftIcon />
            </Fab>

            <Fab aria-label="ArrowRightIcon" onClick={nextSlide} className="arrow rightArrow">
                <ArrowRightIcon />
            </Fab>
            
            <span className="indicatorContainer">
                {data.map((_, index) => {
                    return <button 
                        key={index} 
                        onClick={() => setSlide(index)} 
                        className={slide === index ? "indicator" : "indicator inactiveIndicator"}
                    ></button>
                })}
            </span>
        </div>
    )
};