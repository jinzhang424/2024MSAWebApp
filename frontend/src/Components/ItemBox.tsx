import "./ItemBox.css";
import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import OrderDialog from "./OrderDialog";
import { useState } from "react";

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
    const [selectedItemName, setSelectedItemName] = useState("");

    const handleClickOpen = (itemName: string) => {
        setSelectedItemName(itemName)
        setOpen(true);
    };

    const handleClose = (event: React.SyntheticEvent<unknown>, reason?: string) => {
        if (reason !== 'backdropClick') {
            setOpen(false);
        }
    };

    const handleOk = () => {
        console.log("Ok button pressed");
        setOpen(false);
    };

    const handleCancel = () => {
        setOpen(false);
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
                    <div key={index} onClick={() => handleClickOpen(item.name)} className="item">
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
                <OrderDialog itemName={selectedItemName} onOk={handleOk} onCancel={handleCancel} />
            </Dialog>
        </div>
    )
}