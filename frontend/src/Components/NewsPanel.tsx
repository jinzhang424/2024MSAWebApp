import "./NewsPanelLandscape.css"
import "./NewsPanelPortrait.css"

import { Typography } from "@mui/material";
 
interface LandscapeNewsPanelProps {
    imageUrl: string;
    imageAlt: string;
    imageTitle: string;
    panelOrientation: "Portrait" | "Landscape";
    text: string;
}

  export const LandscapeNewsPanel = ({ imageUrl, imageAlt, imageTitle, panelOrientation, text }: LandscapeNewsPanelProps) => {

    return (
        <div className={panelOrientation + "NewsPanelContainer"}>

            <img src={imageUrl} alt={imageAlt} className={panelOrientation + "NewsPanelImg"}/>

            <div className= {panelOrientation + "NewsPanelText"}>
                <h1 className={panelOrientation + "NewsPanelHeader"}>
                    {imageTitle}
                </h1>

                <Typography>
                    {text}
                </Typography>
            </div>
        </div>
    )
}