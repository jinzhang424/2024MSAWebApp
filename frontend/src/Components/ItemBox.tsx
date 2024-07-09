import "./ItemBox.css";
import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme } from '@mui/material/styles';

export interface ItemBoxInfo {
    name : string;
    price : number;
    imgUrl : string;
    imgAlt : string;
}

export interface ItemBoxProps {
    items : ItemBoxInfo[];
}

export default function ItemBox( { items } : ItemBoxProps ) {

    const theme = createTheme();

    theme.typography.h5 = {
        fontWeight: "600",
        fontSize: "18px"
    }

    theme.typography.body1 = {
        fontWeight: "500"
    }


    return (
        <div className="itemBoxContainer">
            {items.map((item, index) => {
                return (
                    <div key={index} className="item">
                        <img src={item.imgUrl} alt={item.imgAlt} className="itemImg"/>
                        <ThemeProvider theme={theme}>
                            <Typography variant="h5">
                                {item.name}
                            </Typography>
                            <Typography variant="body1">
                                {item.price}$
                            </Typography>
                        </ThemeProvider>
                    </div>
                )
            })}
        </div>
    )
}