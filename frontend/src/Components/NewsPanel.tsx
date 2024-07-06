import "./NewsPanel.css"

import { Typography } from "@mui/material";
 
interface NewsPanelProps {
    imageUrl: string;
    imageAlt: string;
    imageTitle: string;
    text: string;
}

  export const NewsPanel = ({ imageUrl, imageAlt, imageTitle, text }: NewsPanelProps) => {

    return (
        <div className="NewsPanelContainer">

            <div className="imgContainer">
                <img src={imageUrl} alt={imageAlt} className="NewsPanelImg"/>
            </div>

            <div className="NewsPanelText">
                <h1 className="NewsPanelHeader">
                    {imageTitle}
                </h1>

                <Typography>
                    {text}
                </Typography>
            </div>
        </div>
    )
}