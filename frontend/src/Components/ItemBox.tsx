import "./ItemBox.css";
import { Typography } from "@mui/material";

interface ItemBoxInfo {
    name : string;
    price : number;
    imgUrl : string;
    imgAlt : string;
}

interface ItemBoxProps {
    items : ItemBoxInfo[];
}

export default function ItemBox( { items } : ItemBoxProps ) {

    return (
        <div className="itemBoxContainer">
            {items.map((item, index) => {
                return (
                    <div className="item">
                        <img src={item.imgUrl} alt={item.imgAlt} className="itemImg"/>
                        <Typography variant="h5">
                            {item.name}
                        </Typography>
                        <Typography variant="body1">
                            {item.price}$
                        </Typography>
                    </div>
                )
            })}
        </div>
    )
}