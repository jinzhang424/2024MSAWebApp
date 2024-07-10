import "./ItemBox.css";
import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slider from "./Slider";
import MultipleSelectCheckmarks from "./ToppingsSelect" ;
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

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


    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (event: React.SyntheticEvent<unknown>, reason?: string) => {
        if (reason !== 'backdropClick') {
        setOpen(false);
        }
    };


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
                    <div key={index} onClick={handleClickOpen} className="item">
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

            <Dialog disableEscapeKeyDown open={open} onClose={handleClose} className="orderDialogContainer">
                <DialogTitle>Fill the form</DialogTitle>
                    <DialogContent className="orderDialogContent">
                        <div className="sweetnessSlider">
                            <ThemeProvider theme={theme}>
                                <Typography variant="body2">
                                    Sweetness
                                </Typography>
                            </ThemeProvider>
                            <Slider/>
                        </div>
                        <div className="TemperatureSlider">
                            <ThemeProvider theme={theme}>
                                <Typography variant="body2">
                                    Temperature
                                </Typography>
                            </ThemeProvider>
                            <Slider/>
                        </div>
                        <MultipleSelectCheckmarks/>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox />} label="Ice" />
                        </FormGroup>
                    </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Ok</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}