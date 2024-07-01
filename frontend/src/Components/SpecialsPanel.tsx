import "./SpecialsPanel.css"

import { Typography } from "@mui/material";
 
interface SpecialsPanelProps {
    imageUrl: string;
    imageAlt: string;
    imageTitle: string;
    text: string;
}

  export const SpecialsPanel = ({ imageUrl, imageAlt, imageTitle, text }: SpecialsPanelProps) => {

    return (
        <div className="SpecialsPanelContainer">

            <img src={imageUrl} alt={imageAlt} className="SpecialsPanelImg"/>

            <div className="SpecialsPanelText">
                <h1 className="SpecialsPanelHeader">
                    {imageTitle}
                </h1>

                <Typography>
                    {text}
                </Typography>
            </div>
        </div>
    )
}