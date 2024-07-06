import { useState, useEffect } from "react";
import "./NavigationBar.css";
import "./ImageSlider.css";

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

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [slide, setSlide] = useState(0);
    
    const nextSlide = () => {
        setSlide(slide === data.length - 1 ? 0 : slide + 1);
    }

    const prevSlide = () => {
        setSlide(slide === 0 ? data.length - 1 : slide - 1);
    }

    useEffect(() => {
        const handleResize = () => {
          setWindowWidth(window.innerWidth);
        };
    
        window.addEventListener('resize', handleResize);
    
        
        return () => window.removeEventListener('resize', handleResize);
      }, []);
    
      
      const getFabSize = () => {
        if (windowWidth > 900) return 'large'; // Large size for wide screens
        if (windowWidth > 700) return 'medium'; // Medium size for tablets
        return 'small'; // Small size for mobile devices
      };

      const FabSize = getFabSize();

      // Floating action button sizes
      const FabStyles = {
        large: { width: '70px', height: '70px', fontSize: '30px' },
        medium: { width: '50px', height: '50px', fontSize: '25px' },
        small: { width: '40px', height: '40px', fontSize: '20px' },
      };

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

            <div className="Fabs">
                <Fab aria-label="ArrowLeftIcon" onClick={prevSlide} style={{ ...FabStyles[FabSize] }} className="leftArrow customFab">
                    <ArrowLeftIcon />
                </Fab>

                <Fab aria-label="ArrowRightIcon" onClick={nextSlide} style={{ ...FabStyles[FabSize] }} className="rightArrow customFab">
                    <ArrowRightIcon />
                </Fab>
            </div>

            
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